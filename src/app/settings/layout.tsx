import { SideNav } from '@/components/SideNav';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <main className="ml-64">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}