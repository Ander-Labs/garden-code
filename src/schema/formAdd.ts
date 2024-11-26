export interface FormAdd {
  name: string; // Nombre del recurso
  description: string; // Breve descripción del recurso
  url: string; // URL del recurso
  category: string; // Categoría del recurso
  type: string; // Tipo de recurso (artículo, video, etc.)
  tags: string[]; // Etiquetas asociadas al recurso
  recommender_user: string; // UID del usuario que lo recomendó
  is_approved: boolean; // Si ha sido aprobado por un moderador
  created_at: string; // Fecha de creación 
  updated_at: string; // Fecha de última modificación 
}


