import Link from "next/link";
import { BookOpen, BriefcaseBusiness, Building2, ClipboardCheck, Database, FileText, Gauge, Settings, Users } from "lucide-react";

const nav = [
  ["/demo/dashboard", "Command Centre", Gauge], ["/demo/projects", "Projects", Building2], ["/demo/deliverables", "Deliverables", ClipboardCheck],
  ["/demo/risks", "Risks", ClipboardCheck], ["/demo/actions", "Actions", ClipboardCheck], ["/demo/resources", "Resources", Users],
  ["/demo/fees", "Fees & Commercial", BriefcaseBusiness], ["/demo/bim", "BIM / Revit", Database], ["/demo/qa", "QA & Stage Gates", ClipboardCheck],
  ["/demo/reports", "Client Reports", FileText], ["/demo/admin", "Administration", Settings], ["/demo/audit", "Audit", BookOpen]
] as const;

export function DemoAppShell({ children }: { children: React.ReactNode }) {
  return <div className="shell"><aside className="sidebar" aria-label="Demo navigation"><div className="brand"><strong>MEP Consultancy Operating Platform</strong><span>Fictional prototype mode — no account, database or live client information.</span></div><nav className="nav">{nav.map(([href, label, Icon]) => <Link href={href} key={href}><Icon size={18} aria-hidden="true" /><span>{label}</span></Link>)}</nav><div className="side-note"><strong>Demo mode</strong><br />All names, organisations, projects and figures are fictional. Enterprise authentication and persistence remain available when demo mode is disabled.</div></aside><main className="main">{children}</main></div>;
}
