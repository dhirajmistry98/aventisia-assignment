// Sidebar file
import {
  AgentsIcon,
  AIModelsIcon,
  LibraryIcon,
  PublishedIcon,
  MachinesIcon,
  QueuesIcon,
  TriggersIcon,
  JobsIcon,
  ExecutionsIcon,
  VaultIcon,
  KnowledgeBaseIcon,
  KeyStoreIcon,
  TenantIcon,
  IntegrationsIcon,
} from "../icons/Icons";

interface NavItemProps {
  icon: any; // Using any for simplicity as it's just svg icons
  label: string;
  isActive?: boolean;
}

const NavItem = ({ icon, label, isActive = false }: NavItemProps) => (
  <div
    className={`flex items-center gap-3 px-3 py-[7px] cursor-pointer transition-all duration-150 group
      ${isActive
        ? "bg-[#4F46E5]/5 text-[#4F46E5] border-l-[3px] border-[#4F46E5] pl-[calc(0.75rem-3px)]"
        : "text-[#4b5563] hover:text-[#111827] hover:bg-gray-50/80"
      }`}
  >
    <span className={`shrink-0 transition-colors ${isActive ? "text-[#4F46E5]" : "text-[#9ca3af] group-hover:text-[#4b5563]"}`}>
      {icon}
    </span>
    <span className="text-[12px] font-medium tracking-tight truncate">{label}</span>
  </div>
);

const SectionLabel = ({ label }: { label: string }) => (
  <div className="px-3 pt-4 pb-1">
    <span className="text-[#9ca3af] text-[9px] font-bold tracking-widest uppercase opacity-70">{label}</span>
  </div>
);

const Sidebar = () => {
  return (
    <aside className="w-[208px] bg-white border-r border-[#F3F4F6] fixed top-12 left-0 bottom-0 flex flex-col overflow-y-auto z-50 pt-2 pb-6">
      <SectionLabel label="My Projects" />
      <NavItem icon={<AgentsIcon />} label="Agents" />
      <NavItem icon={<AIModelsIcon />} label="AI Models" />
      <NavItem icon={<LibraryIcon />} label="Library" />

      <SectionLabel label="Orchestrator" />
      <NavItem icon={<PublishedIcon />} label="Published" />
      <NavItem icon={<MachinesIcon />} label="Machines" />
      <NavItem icon={<QueuesIcon />} label="Queues" />
      <NavItem icon={<TriggersIcon />} label="Triggers" />
      <NavItem icon={<JobsIcon />} label="Jobs" />
      <NavItem icon={<ExecutionsIcon />} label="Executions" />
      <NavItem icon={<VaultIcon />} label="Vault" />
      <NavItem icon={<KnowledgeBaseIcon />} label="Knowledge Base" isActive={true} />
      <NavItem icon={<KeyStoreIcon />} label="Key Store" />

      <SectionLabel label="Admin" />
      <NavItem icon={<TenantIcon />} label="Tenant" />
      <NavItem icon={<IntegrationsIcon />} label="Integrations" />
    </aside>
  );
};

export default Sidebar;