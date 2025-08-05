import { AdminAuth, AdminButton } from "@/components/AdminAuth";
import { ProjectManager } from "@/components/ProjectManager";

const AdminPage = () => {
  return (
    <AdminAuth>
      <div className="min-h-screen bg-background">
        <ProjectManager />
        <AdminButton />
      </div>
    </AdminAuth>
  );
};

export default AdminPage;