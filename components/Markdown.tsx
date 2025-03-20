export function Markdown({content}: { content: string }) {
  return (
    <div className={'content'} dangerouslySetInnerHTML={{__html: content}}/>
  )
}
