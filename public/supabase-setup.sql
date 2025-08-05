-- Setup script for Supabase database
-- Run this in your Supabase SQL editor

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  images TEXT[] DEFAULT '{}',
  technologies TEXT[] DEFAULT '{}',
  features TEXT[] DEFAULT '{}',
  timeline TEXT NOT NULL,
  location TEXT NOT NULL,
  company TEXT NOT NULL,
  company_url TEXT,
  role TEXT NOT NULL,
  status TEXT CHECK (status IN ('In Progress', 'Completed')) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by TEXT NOT NULL
);

-- Create storage bucket for project images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('project-images', 'project-images', true)
ON CONFLICT (id) DO NOTHING;

-- Set up RLS (Row Level Security) policies
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow read access to everyone
CREATE POLICY "Public read access for projects" ON projects
  FOR SELECT USING (true);

-- Allow insert/update/delete only for authorized users
-- Replace 'your_authorized_user_id_here' with your actual Clerk user ID
CREATE POLICY "Authorized users can manage projects" ON projects
  FOR ALL USING (created_by = 'user_your_authorized_user_id_here');

-- Storage policies
CREATE POLICY "Public read access for project images" ON storage.objects
  FOR SELECT USING (bucket_id = 'project-images');

CREATE POLICY "Authorized users can upload project images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'project-images');

CREATE POLICY "Authorized users can update project images" ON storage.objects
  FOR UPDATE USING (bucket_id = 'project-images');

CREATE POLICY "Authorized users can delete project images" ON storage.objects
  FOR DELETE USING (bucket_id = 'project-images');

-- Insert sample projects (optional)
INSERT INTO projects (
  title, description, images, technologies, features, timeline, 
  location, company, company_url, role, status, created_by
) VALUES 
(
  'Industrial Development',
  'Civil and Structural Engineering Design and Analysis, including parking of 4600 SM warehouse for Arichem Ltd',
  ARRAY['/images/projects/arichem.jpg'],
  ARRAY['AutoCAD', 'ETABS', 'Revit', 'BIM 360'],
  ARRAY[
    'Engineering Scope: Integrated civil (site grading, drainage, roads) and structural (warehouse framing, foundations) design and analysis',
    'Construction Phase Focus: On-site supervision and compliance with design specifications and safety standards',
    'Key Deliverables: As-built drawings and as-built bill of quantities for accurate project recordkeeping'
  ],
  'May 2024 - Present',
  'Kitengela County, Kenya',
  'CGP Consulting Engineers Ltd',
  'https://cgpconsulting.co.ke',
  'Assistant Resident Engineer/Assistant Structural Engineer',
  'In Progress',
  'system'
)
ON CONFLICT DO NOTHING;