🚀 Astro 5 + Shadcn/UI Starter Kit
Una plantilla de inicio ultrarrápida que combina el rendimiento de Astro con los bellos componentes de Shadcn/UI.

🎨 Capturas de Pantalla

⚡ Inicio Rápido
bash
Copiar

# Clona el repositorio

git clone https://github.com/one-ie/astro-shadcn.git

# Entra en el directorio del proyecto

cd astro-shadcn

# Instala las dependencias

npm install

# Inicia el servidor de desarrollo

npm run dev
Abre tu navegador en http://localhost:4321 y ¡listo para comenzar! 🎉

🎨 Componentes Preinstalados
Todos los componentes de Shadcn/UI están preconfigurados para funcionar con Astro.
Por ejemplo, puedes usarlos de la siguiente manera en un archivo .astro:

astro
Copiar

---

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

---

<Button>¡Haz clic!</Button>
Componentes Disponibles
✅ Acordeón (Accordion)
✅ Diálogo de Alerta (Alert Dialog)
✅ Avatar
✅ Insignia (Badge)
✅ Botón (Button)
✅ Tarjeta (Card)
✅ Diálogo (Dialog)
... ¡y muchos más!
🛠️ Estructura del Proyecto
plaintext
Copiar
tu-proyecto/
├── src/
│ ├── components/
│ │ └── ui/ # Todos los componentes de Shadcn/UI
│ ├── layouts/
│ │ └── Layout.astro # Layout base
│ └── pages/
│ └── index.astro # Página de inicio
├── astro.config.mjs # Configuración de Astro
└── tailwind.config.cjs # Configuración de Tailwind CSS
📦 Uso de Componentes
Puedes integrar los componentes de Shadcn/UI en tus páginas de Astro de la siguiente forma:

astro
Copiar

---

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

---

<Card>
  <CardHeader>
    <CardTitle>¡Bienvenido a Astro + Shadcn!</CardTitle>
  </CardHeader>
  <Button client:load>Botón Interactivo</Button>
</Card>
🚀 Flujo de Trabajo en Desarrollo
Iniciar el Desarrollo

bash
Copiar
npm run dev
Uso de Componentes React en Astro

astro
Copiar

---

// Recuerda agregar `client:load` para componentes interactivos
import { Dialog } from "@/components/ui/dialog";

---

<Dialog client:load>
  <!-- Contenido del diálogo -->
</Dialog>
Construir para Producción

bash
Copiar
npm run build
npm run preview # Para probar la versión de producción
🔍 Solución de Problemas
Problemas Comunes Resueltos
✅ Hidratación de Componentes: Todos los componentes interactivos utilizan client:load
✅ Advertencias en el Build: Configuradas para minimizar advertencias innecesarias
✅ Alias de Rutas: Preconfigurados para facilitar las importaciones
✅ Integración con React: Configurada correctamente para los componentes de Shadcn/UI
💡 Consejos Prácticos
Uso de Componentes en Astro

astro
Copiar

---

// Importa siempre en el frontmatter
import { Button } from "@/components/ui/button";

---

<!-- Úsalo en el template -->

<Button client:load>¡Haz clic!</Button>
Estilizando con Tailwind CSS

astro
Copiar

<div class="dark:bg-slate-800">
  <Button class="m-4">Botón Estilizado</Button>
</div>
Uso de Layouts

astro
Copiar

---

## import Layout from '../layouts/Layout.astro';

<Layout title="Inicio">
  <!-- Tu contenido aquí -->
</Layout>
📊 Rendimiento y Más Capturas
⚡ Puntuaciones Lighthouse

Puntuaciones perfectas en todas las métricas:

🚀 Rendimiento: 100
♿ Accesibilidad: 100
🔧 Buenas Prácticas: 100
🔍 SEO: 100
📚 Enlaces Rápidos
Documentación de Astro
Componentes Shadcn/UI
Documentación de Tailwind CSS
🤝 ¿Necesitas Ayuda?
Únete al Discord de Astro
Consulta la Documentación de Astro
Abre un Issue en GitHub
Construido con 🚀 Astro y 🎨 Shadcn/UI por ONE
