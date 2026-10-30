import { dd2030Config } from "./_dd2030config.ts";
import pagefind from "lume/plugins/pagefind.ts";
import lume from "lume/mod.ts";

const site = lume({
  prettyUrls: false,
  src: "src",
});

site.use(dd2030Config);
site.use(pagefind());

// 広聴AIの静的ビューア（kouchou-ai の shell 方式でビルド済み）は、Lume のページとして処理せず
// ビルド後にそのまま _site へ複製する（_next/ などの "_" 始まりも含めて変更なしで配信するため）
const STATIC_DIRS = ["kouchou-ai/hankookilbo-2026/map"];
site.ignore(...STATIC_DIRS);

async function copyDir(from: string, to: string) {
  await Deno.mkdir(to, { recursive: true });
  for await (const entry of Deno.readDir(from)) {
    const src = `${from}/${entry.name}`;
    const dest = `${to}/${entry.name}`;
    if (entry.isDirectory) await copyDir(src, dest);
    else if (entry.isFile) await Deno.copyFile(src, dest);
  }
}

site.addEventListener("afterBuild", async () => {
  for (const dir of STATIC_DIRS) {
    await copyDir(site.src(dir), site.dest(dir));
  }
});

export default site;
