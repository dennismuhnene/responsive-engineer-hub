import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseAnonKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Project {
  id: string
  title: string
  description: string
  images: string[]
  technologies: string[]
  features: string[]
  timeline: string
  location: string
  company: string
  company_url?: string
  role: string
  status: 'In Progress' | 'Completed'
  created_at: string
  updated_at: string
  created_by: string
}

// Project management functions
export const projectService = {
  async getAllProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async createProject(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('projects')
      .insert([project])
      .select()
    
    if (error) throw error
    return data[0]
  },

  async updateProject(id: string, updates: Partial<Project>) {
    const { data, error } = await supabase
      .from('projects')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data[0]
  },

  async deleteProject(id: string) {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  },

  async uploadImage(file: File, projectId: string): Promise<string> {
    const fileExt = file.name.split('.').pop()
    const fileName = `${projectId}/${Date.now()}.${fileExt}`
    
    const { data, error } = await supabase.storage
      .from('project-images')
      .upload(fileName, file)
    
    if (error) throw error
    
    const { data: { publicUrl } } = supabase.storage
      .from('project-images')
      .getPublicUrl(fileName)
    
    return publicUrl
  }
}