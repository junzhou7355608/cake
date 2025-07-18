import ModuleCard from '@/components/module-card'
import NavBar from '@/components/nav-bar'

export default function Index() {
  return (
    <div>
      <NavBar backIcon={false}>首页</NavBar>

      <div className="p-3 flex flex-col gap-2">
        <ModuleCard />
      </div>
    </div>
  )
}
