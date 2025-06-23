'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Save, Github, Settings, Key } from 'lucide-react'

interface GitHubSettings {
  appId: string
  installationId: string
  targetOwner: string
  targetRepo: string
  baseBranch: string
}

export default function SettingsPage() {
  const [githubSettings, setGitHubSettings] = useState<GitHubSettings>({
    appId: '',
    installationId: '',
    targetOwner: '',
    targetRepo: '',
    baseBranch: 'main'
  })
  
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')

  const handleGitHubSettingsChange = (field: keyof GitHubSettings, value: string) => {
    setGitHubSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSaveGitHubSettings = async () => {
    setIsSaving(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSaveMessage('GitHub設定が保存されました')
      setTimeout(() => setSaveMessage(''), 3000)
    } catch (error) {
      setSaveMessage('保存に失敗しました')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2">
          <Settings className="h-8 w-8" />
          設定
        </h1>
        <p className="text-gray-600">
          デジタル民主主義2030プロジェクトの各種設定を管理します
        </p>
      </div>

      <Tabs defaultValue="github" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="github" className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            GitHub連携
          </TabsTrigger>
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            一般設定
          </TabsTrigger>
        </TabsList>

        <TabsContent value="github" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                GitHub App設定
              </CardTitle>
              <CardDescription>
                GitHub連携機能を使用するためのGitHub App情報を設定します。
                <a 
                  href="https://github.com/settings/apps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline ml-1"
                >
                  GitHub Developer Settings
                </a>
                で作成できます。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="appId">App ID</Label>
                  <Input
                    id="appId"
                    placeholder="123456"
                    value={githubSettings.appId}
                    onChange={(e) => handleGitHubSettingsChange('appId', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="installationId">Installation ID</Label>
                  <Input
                    id="installationId"
                    placeholder="12345678"
                    value={githubSettings.installationId}
                    onChange={(e) => handleGitHubSettingsChange('installationId', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="targetOwner">対象リポジトリオーナー</Label>
                  <Input
                    id="targetOwner"
                    placeholder="digitaldemocracy2030"
                    value={githubSettings.targetOwner}
                    onChange={(e) => handleGitHubSettingsChange('targetOwner', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetRepo">対象リポジトリ名</Label>
                  <Input
                    id="targetRepo"
                    placeholder="dd2030website"
                    value={githubSettings.targetRepo}
                    onChange={(e) => handleGitHubSettingsChange('targetRepo', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="baseBranch">ベースブランチ</Label>
                <Input
                  id="baseBranch"
                  placeholder="main"
                  value={githubSettings.baseBranch}
                  onChange={(e) => handleGitHubSettingsChange('baseBranch', e.target.value)}
                />
              </div>

              <Alert>
                <Key className="h-4 w-4" />
                <AlertDescription>
                  GitHub App の秘密鍵ファイル（.pem）は、サーバー環境に安全に配置する必要があります。
                  本番環境では環境変数やシークレット管理サービスを使用してください。
                </AlertDescription>
              </Alert>

              <div className="flex justify-end">
                <Button 
                  onClick={handleSaveGitHubSettings}
                  disabled={isSaving}
                  className="flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  {isSaving ? '保存中...' : 'GitHub設定を保存'}
                </Button>
              </div>

              {saveMessage && (
                <Alert className="mt-4">
                  <AlertDescription>{saveMessage}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>GitHub連携機能</CardTitle>
              <CardDescription>
                設定完了後に利用可能になる機能
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Pull Request自動作成
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  リポジトリコンテンツの読み取り・編集
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  ブランチ管理
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  コミット履歴の取得
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>一般設定</CardTitle>
              <CardDescription>
                サイト全体の基本設定を管理します
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                一般設定機能は今後実装予定です。
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
