// useForm.ts
import { useState } from "react";
import { validateForm } from "@/services/validationService";
import { addFormFront } from "@/services/addFormFront"; // Función para guardar en Firestore
import { FormAdd } from "@/schema/formAdd";

export const useForm = (initialState: FormAdd) => {
  const [formData, setFormData] = useState<FormAdd>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "tags") {
      setFormData((prev) => ({
        ...prev,
        tags: value.split(",").map((tag) => tag.trim()),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    onSuccess: () => void
  ) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      await addFormFront(formData);
      onSuccess();
    } catch (error) {
      console.error("Error al enviar la recomendación:", error);
      alert("Hubo un error al enviar la recomendación.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, errors, isSubmitting, handleChange, handleSubmit };
};
