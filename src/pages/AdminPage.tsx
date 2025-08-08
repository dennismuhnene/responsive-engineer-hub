import AdminNav from "@/components/AdminNav";
import { ProjectManager } from "@/components/ProjectManager";
import { SimpleAuth } from "@/components/SimpleAuth";

const AdminPage = () => {
  return (
    <SimpleAuth>
      <div className="min-h-screen bg-background">
        <AdminNav />
        <main className="pt-20">
          <ProjectManager />
        </main>
      </div>
    </SimpleAuth>
  );
};

export default AdminPage;