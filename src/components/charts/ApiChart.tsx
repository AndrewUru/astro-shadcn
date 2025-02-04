import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Bodega {
  id: number;
  nombre: string;
  ubicacion: string;
  descripcion?: string;
  contacto?: string;
  url_imagen_logo?: string;
}

const BodegasList: React.FC = () => {
  const [bodegas, setBodegas] = useState<Bodega[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

  const fetchBodegas = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}/read/bodegas?Instance=45063_sistema_de_usuarios_v1`,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al obtener las bodegas");
      }

      const { data } = await response.json();
      setBodegas(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBodegas();
  }, []);

  if (error) {
    return (
      <div className="p-4 text-red-500 border rounded-lg bg-red-50">
        Error: {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2 mt-2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mt-2" />
              <Skeleton className="h-4 w-2/3 mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Lista de Bodegas</h2>

      {bodegas.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          No hay bodegas registradas
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bodegas.map((bodega) => (
            <Card key={bodega.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {bodega.url_imagen_logo && (
                    <img
                      src={bodega.url_imagen_logo}
                      alt={`Logo ${bodega.nombre}`}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <CardTitle>{bodega.nombre}</CardTitle>
                    <CardDescription>{bodega.ubicacion}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {bodega.descripcion || "Descripción no disponible"}
                </p>
                {bodega.contacto && (
                  <p className="mt-2 text-sm text-blue-600">
                    {bodega.contacto}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default BodegasList;
