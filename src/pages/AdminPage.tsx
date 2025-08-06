import { ClerkWrapper } from "@/components/ClerkProvider";
import { AdminAuth, AdminButton } from "@/components/AdminAuth";
import { ProjectManager } from "@/components/ProjectManager";

const AdminPage = () => {
  return (
    <ClerkWrapper>
      <AdminAuth>
        <div className="min-h-screen bg-background">
          <ProjectManager />
          <AdminButton />
        </div>
      </AdminAuth>
    </ClerkWrapper>
  );
};

export default AdminPage;