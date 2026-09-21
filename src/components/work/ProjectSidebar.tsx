import { type Project } from "@/data/projects";

interface ProjectSidebarProps {
  project: Project;
}

export default function ProjectSidebar({ project }: ProjectSidebarProps) {
  return (
    <aside
      style={{
        position: "sticky",
        top: "100px",
        borderRight: "1px solid rgba(0,0,0,0.08)",
        paddingRight: "clamp(32px, 4vw, 60px)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {[
          { label: "Project", value: project.title },
          { label: "Role", value: project.roles.join(", ") },
          { label: "Year", value: project.year },
          { label: "Client", value: project.client },
          { label: "Type", value: project.type },
        ].map(({ label, value }) => (
          <div
            key={label}
            style={{
              borderTop: "1px solid rgba(0,0,0,0.08)",
              padding: "20px 0",
            }}
          >
            <p
              style={{
                color: "#8D8D87",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
                fontFamily: "var(--font-body)",
              }}
            >
              {label}
            </p>
            <p
              style={{
                color: "#050505",
                fontSize: "14px",
                lineHeight: 1.5,
                fontFamily: "var(--font-body)",
                fontWeight: 500,
              }}
            >
              {value}
            </p>
          </div>
        ))}

        {/* Skills */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", padding: "20px 0" }}>
          <p
            style={{
              color: "#8D8D87",
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "12px",
              fontFamily: "var(--font-body)",
            }}
          >
            Skills
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project.tools.map((tool) => (
              <span
                key={tool}
                style={{
                  border: "1px solid rgba(0,0,0,0.1)",
                  color: "#8D8D87",
                  borderRadius: "100px",
                  padding: "4px 12px",
                  fontSize: "11px",
                  letterSpacing: "0.04em",
                  fontFamily: "var(--font-body)",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
