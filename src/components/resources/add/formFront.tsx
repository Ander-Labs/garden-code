"use client";

import { useForm } from "@/hooks/ useForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function FormFront() {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } =
    useForm({
      name: "",
      description: "",
      url: "",
      category: "",
      type: "",
      tags: [],
      recommender_user: "user123",
      is_approved: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

  const onSuccess = () => {
    alert("Recomendación enviada con éxito.");
    // Puedes redirigir o resetear el formulario aquí
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e, onSuccess)}
      className="max-w-lg mx-auto p-2 space-y-2 shadow-md rounded-lg"
    >
      <h2 className="text-xl font-bold">Recomienda un recurso</h2>

      {/* Nombre */}
      <div className="space-y-2">
        <Label htmlFor="name">Nombre del recurso</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre del recurso"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Descripción */}
      <div className="space-y-2">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe el recurso..."
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description}</p>
        )}
      </div>

      {/* URL */}
      <div className="space-y-2">
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          name="url"
          type="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="https://ejemplo.com"
        />
        {errors.url && <p className="text-red-500 text-sm">{errors.url}</p>}
      </div>

      {/* Categoría */}
      <div className="space-y-2">
        <Label htmlFor="category">Categoría</Label>
        <Select
          value={formData.category}
          onValueChange={(value) =>
            handleChange({ target: { name: "category", value } } as any)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecciona una categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="frontend">Frontend</SelectItem>
            <SelectItem value="backend">Backend</SelectItem>
            <SelectItem value="devops">DevOps</SelectItem>
            <SelectItem value="design">Diseño</SelectItem>
          </SelectContent>
        </Select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category}</p>
        )}
      </div>

      {/* Tipo */}
      <div className="space-y-2">
        <Label htmlFor="type">Tipo</Label>
        <Select
          value={formData.type}
          onValueChange={(value) =>
            handleChange({ target: { name: "type", value } } as any)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecciona un tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="article">Artículo</SelectItem>
            <SelectItem value="video">Video</SelectItem>
            <SelectItem value="tool">Herramienta</SelectItem>
          </SelectContent>
        </Select>
        {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
      </div>

      {/* Etiquetas */}
      <div className="space-y-2">
        <Label htmlFor="tags">Etiquetas (separadas por comas)</Label>
        <Input
          id="tags"
          name="tags"
          type="text"
          value={formData.tags.join(", ")}
          onChange={handleChange}
          placeholder="Ejemplo: react, css, testing"
        />
      </div>

      {/* Botón de envío */}
      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Enviando..." : "Enviar Recomendación"}
        </Button>
      </div>
    </form>
  );
}
