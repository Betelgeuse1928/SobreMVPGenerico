# Sobre — MVP de invitaciones digitales

Landing de marketing + motor genérico de invitaciones digitales, para promocionar el servicio de
armado de invitaciones a medida (bodas, XV, cumpleaños, baby showers, etc).

No tiene backend: todo el contenido vive en `src/data/events.ts`. Pensado para desplegar
directo en Vercel como sitio estático/SSR simple.

## Cómo correrlo en local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Estructura

```
src/
  app/
    page.tsx                  # Landing (marketing)
    invitacion/[slug]/page.tsx  # Renderiza cualquier evento de events.ts por su slug
  components/
    landing/                  # Nav, Hero, Features, EventTypes, Process, CTA, Footer
    invitation/                # Hero, Countdown, Locations, DressCode, Gallery, RSVP, Extras
    ui/                        # Button, Container
  data/
    events.ts                  # ACÁ se agregan/editan las invitaciones (demo o reales)
  types/
    event.ts                   # Forma de un EventConfig
  hooks/
    useCountdown.ts
```

## Cómo agregar una invitación nueva

1. Copiá un bloque de `src/data/events.ts` (por ejemplo el de `boda-demo`).
2. Cambiá `slug`, textos, fechas, ubicaciones y la paleta `theme` (6 colores).
3. Se publica sola en `/invitacion/tu-slug`, sin tocar ningún componente.

Cada evento define su propia paleta de colores vía `theme`, que se inyecta como variables CSS
(`--inv-accent`, `--inv-paper`, etc.) — así cada invitación se ve distinta sin duplicar código.

## Notas importantes antes de publicar

- **La boda (Daiana & Facundo) y la de Luz son proyectos reales, ya publicados** — su tarjeta usa
  `externalUrl` y enlaza afuera, no se renderizan con el motor genérico. **Sofía y Mateo son
  ficticios**, pensados solo para mostrar el estilo. No reemplaces estos últimos por datos reales
  de un cliente sin su permiso explícito.
- La **galería usa bloques con inicial + leyenda**, no fotos reales, para no depender de fotos de
  terceros en el sitio de marketing. Para una invitación real de un cliente, se reemplaza por sus
  fotos (`next/image` + carpeta `public/images/...`).
- El **formulario de RSVP es una simulación** (no guarda datos en ningún lado). Para una
  invitación real hay que conectarlo a algo como Supabase, Google Sheets, o un form service.
- Quedan **placeholders marcados `// TODO`** en `CTA.tsx` (WhatsApp/email de contacto reales)
  antes de publicar.

## Deploy en Vercel

1. Subí esta carpeta a un repo de GitHub (nuevo, separado del proyecto de XV).
2. Entrá a [vercel.com/new](https://vercel.com/new), importá el repo.
3. Vercel detecta Next.js automáticamente — no hace falta configurar nada más.
4. Deploy. Listo, queda en una URL tipo `sobre-tuusuario.vercel.app` (podés después conectar un
   dominio propio desde el panel de Vercel).
