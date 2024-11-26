// validationService.ts
import { FormAdd } from "@/schema/formAdd";

export const validateForm = (formData: FormAdd): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) errors.name = "El nombre es obligatorio.";
  if (!formData.description.trim())
    errors.description = "La descripción es obligatoria.";
  if (!formData.url.trim() || !/^https?:\/\/.+$/.test(formData.url)) {
    errors.url = "Ingresa una URL válida.";
  }
  if (!formData.category.trim()) errors.category = "Selecciona una categoría.";
  if (!formData.type.trim()) errors.type = "Selecciona un tipo.";

  return errors;
};
