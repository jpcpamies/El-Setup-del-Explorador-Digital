
import React from 'react';
import { GuideBlock } from './types';

const EscribaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
);
const ObservadorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);
const MemoriaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h4M8 7a2 2 0 012-2h4a2 2 0 012 2v8a2 2 0 01-2 2h-4a2 2 0 01-2-2z" /></svg>
);
const InterpreteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m4 0v2M3 17h12M9 15v2M4 11h16M12 7v8" /></svg>
);

export const GUIDE_BLOCKS: GuideBlock[] = [
  {
    id: 'intro',
    title: 'Introducción',
    subtitle: 'Mentalidad y fundamentos del Explorador Digital.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    complete: [
      {
        id: 'intro-mindset',
        title: 'Cambio de Mentalidad (Reglas de Oro)',
        content: [
          { type: 'paragraph', content: 'Para colaborar eficazmente con la IA, primero debemos cambiar nuestra percepción. No es solo una herramienta, sino un colega experto.' },
          { type: 'list', content: [
              '**Deja de tratar a la IA como una herramienta:** Piensa en ella como un colaborador.',
              '**Empieza a colaborar como tu colega experto de confianza:** Delegale tareas complejas.',
              '**El contexto es clave para que la IA dé buenas respuestas:** Más es mejor. Proporciona toda la información relevante.'
            ]
          }
        ]
      },
      {
        id: 'intro-learn',
        title: 'Lo que Aprenderás',
        content: [
          { type: 'paragraph', content: 'Adquirirás 3 habilidades fundamentales que no pasan de moda, porque no dependen de una herramienta específica, sino de cómo piensas y te relacionas con la tecnología.' },
        ]
      },
    ],
    quick: [
        {
        id: 'intro-resources',
        title: 'Recursos para la Masterclass',
        content: [
            { type: 'paragraph', content: 'Aquí tienes los enlaces directos a los recursos mencionados para empezar.' },
            { type: 'link', content: 'Consultas 1:1 gratuitas (20 min) - Calendly' },
            { type: 'link', content: 'Documento Completo de la Masterclass' }
        ]
        }
    ]
  },
  {
    id: 'escriba',
    title: 'Bloque 1: El Escriba',
    subtitle: 'Convierte tu voz en texto de forma instantánea.',
    icon: <EscribaIcon />,
    complete: [
      {
        id: 'escriba-problem',
        title: 'El Problema: Escribir es Lento',
        content: [
          { type: 'paragraph', content: 'Necesitas escribir un email largo o un documento complejo, te toma 20 minutos y el resultado no suena natural. Tu cerebro procesa ideas a 200 km/h, pero tus dedos solo escriben a 40 km/h. ¿Y si pudieras pensar en voz alta y que todo se capture instantáneamente?' },
        ],
        interlink: { text: 'Ver detalles de instalación →', targetId: 'escriba-how' }
      },
      {
        id: 'escriba-solution',
        title: 'La Solución: Pensar en Voz Alta',
        content: [
          { type: 'list', title: '1. Emails en 1/3 del Tiempo', content: ['Lo que escribes en 15 min lo dictas en 5 min, y suena más natural. Luego, le pides a la IA que estructure y mejore el texto.'] },
          { type: 'list', title: '2. Explicaciones Complejas a la IA', content: ['Tu cerebro fluye mejor hablando que escribiendo. La IA entiende mejor el contexto conversacional.'] },
          { type: 'list', title: '3. Brainstorming sin Fricción', content: ['Generas más ideas y detalles hablando que escribiendo (Ideas → Voz → Texto).'] }
        ]
      }
    ],
    quick: [
      {
        id: 'escriba-how',
        title: 'Cómo Implementarlo',
        content: [
          { type: 'paragraph', content: 'Activa el dictado por voz en tu sistema operativo.' },
          { type: 'os-tabs', tabs: [
              { os: 'mac', title: 'macOS', content: [
                  { type: 'list', title: 'Activar Dictado', content: [
                      'Ve a `Ajustes del Sistema` > `Teclado`.',
                      'Activa la opción "Dictado".',
                      'Elige tu idioma principal y el atajo de teclado (por defecto, presionar `Fn` dos veces).'
                  ]},
              ]},
              { os: 'windows', title: 'Windows 11', content: [
                  { type: 'list', title: 'Activación', content: [
                      'Presiona `Windows + H` en cualquier campo de texto para iniciar el dictado.',
                      'Habla.',
                      'Presiona `Windows + H` nuevamente para detener.'
                  ]},
                  { type: 'list', title: 'Verificar Micrófono', content: [
                      'Ve a `Configuración` > `Sistema` > `Sonido` > `Entrada`.',
                      'Asegúrate de que tu micrófono esté seleccionado y con permisos en `Privacidad` > `Micrófono`.'
                  ]},
              ]},
              { os: 'alternatives', title: 'Alternativas', content: [
                  { type: 'list', content: [
                      '**App de ChatGPT:** Las aplicaciones nativas para Windows y Mac tienen su propio modo de dictado por voz, que suele ser muy fiable.'
                  ]}
              ]}
          ]}
        ]
      },
      {
        id: 'escriba-exercise',
        title: 'Ejercicio Práctico',
        content: [
          { type: 'list', content: [
            '**Paso 1:** Piensa en una receta que sepas preparar.',
            '**Paso 2:** Colócate en la caja de texto de tu chat IA favorito (ChatGPT, Gemini, etc.).',
            '**Paso 3:** Activa tu método de dictado.',
            '**Paso 4:** Dicta durante 1-2 minutos la receta completa. Habla de forma natural, no te preocupes por las pausas o pequeños errores.',
            '**Paso 5:** Revisa el texto generado y corrige solo los errores más grandes.',
            '**Paso 6:** Pídele a la IA: "Convierte esta receta en formato paso a paso, numerado y añade tiempos exactos".'
          ]}
        ]
      }
    ]
  },
  {
    id: 'observador',
    title: 'Bloque 2: El Observador',
    subtitle: 'Captura lo que ves en pantalla para la IA.',
    icon: <ObservadorIcon />,
    complete: [
      {
        id: 'observador-problem',
        title: 'El Problema: Describir lo Visual es Imposible',
        content: [
          { type: 'paragraph', content: 'Ves algo en tu pantalla que quieres analizar con la IA (un error de código, un diseño, una tabla de datos). Al intentar describirlo con palabras, pierdes detalles cruciales. ¿Y si pudieras mostrarle directamente lo que ves?' },
        ],
        interlink: { text: 'Ver detalles de implementación →', targetId: 'observador-how' }
      },
      {
        id: 'observador-solution',
        title: 'La Solución: Capturas Inteligentes',
        content: [
          { type: 'list', title: '1. Captura de Pantalla Selectiva', content: ['Captura exactamente lo que necesitas: un elemento, una sección, una ventana o toda la pantalla. Luego, pregunta a la IA: "¿Qué significa esto?".'] },
          { type: 'list', title: '2. Páginas Web Completas (con Scroll)', content: ['Captura todo el contenido de una página de arriba a abajo, no solo la parte visible. Ideal para analizar artículos largos, landing pages o dashboards.'] }
        ]
      }
    ],
    quick: [
      {
        id: 'observador-how',
        title: 'Cómo Implementarlo',
        content: [
          { type: 'paragraph', content: 'Usa las herramientas nativas de tu sistema y extensiones de navegador.' },
          { type: 'os-tabs', tabs: [
              { os: 'mac', title: 'macOS (Atajos Nativos)', content: [
                  { type: 'list', content: [
                      '`Cmd + Shift + 3`: Pantalla completa.',
                      '`Cmd + Shift + 4`: Selección de área.',
                      '`Cmd + Shift + 4 + Espacio`: Ventana específica.'
                  ]},
              ]},
              { os: 'windows', title: 'Windows 11', content: [
                  { type: 'list', title: 'Herramienta Recortes', content: [
                      '`Windows + Shift + S`: Abre la herramienta de recortes.',
                      'Elige el modo: Rectangular, Forma libre, Ventana o Pantalla completa.',
                      'La captura se copia al portapapeles. Pégala con `Ctrl + V`.'
                  ]},
              ]},
              { os: 'alternatives', title: 'Páginas Web Completas', content: [
                  { type: 'list', title: 'Extensión GoFullPage (Chrome/Edge)', content: [
                      'Busca "<a href="https://chromewebstore.google.com/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl?utm_source=ext_app_menu" target="_blank" rel="noopener noreferrer">GoFullPage</a>" en la Chrome Web Store e instálala.',
                      'Navega a la página que quieres capturar.',
                      'Haz clic en el icono de la extensión en tu barra de herramientas.',
                      'Descarga la imagen completa.'
                  ]}
              ]}
          ]}
        ]
      }
    ]
  },
  {
    id: 'memoria',
    title: 'Bloque 3: La Memoria Extendida',
    subtitle: 'Tu biblioteca personal de textos reutilizables.',
    icon: <MemoriaIcon />,
    complete: [
      {
        id: 'memoria-problem',
        title: 'El Problema: El Ciclo Frustrante de Copiar y Pegar',
        content: [
          { type: 'paragraph', content: 'Quieres usar un prompt de IA que guardaste en Notion. Tienes que salir de tu flujo de trabajo, abrir Notion, buscar, copiar, volver y pegar. Pierdes 45 segundos y el coste mental de cambiar de contexto. El problema no es que se borre el portapapeles, es que tu contenido reutilizable vive lejos de donde lo necesitas.' },
        ],
        interlink: { text: 'Ver detalles de instalación →', targetId: 'memoria-how' }
      },
      {
        id: 'memoria-solution',
        title: 'La Solución: Un Gestor de Portapapeles Avanzado',
        content: [
          { type: 'paragraph', content: 'Accede a una biblioteca organizada de tus textos más usados con un simple atajo de teclado, sin salir de tu aplicación actual.' },
          { type: 'list', content: [
              '**Biblioteca de Prompts:** Ten tus mejores prompts categorizados y listos.',
              '**Comandos de Terminal:** Guarda esos comandos complejos que usas semanalmente.',
              '**Respuestas Tipo:** Almacena emails, firmas y respuestas frecuentes.',
              '**Snippets de Código:** Reutiliza bloques de código, fórmulas o referencias.'
          ]}
        ]
      }
    ],
    quick: [
      {
        id: 'memoria-how',
        title: 'Cómo Implementarlo',
        content: [
          { type: 'paragraph', content: 'Instala una aplicación dedicada para gestionar tu historial del portapapeles.' },
          { type: 'os-tabs', tabs: [
              { os: 'mac', title: 'Paste (Recomendado)', content: [
                  { type: 'link', content: 'https://pasteapp.io' },
                  { type: 'list', content: [
                      'Descarga e instala la app.',
                      'Configura un atajo de teclado (ej. `Cmd + Shift + B`).',
                      'Crea categorías (Pinboards) como "Prompts IA", "Terminal", "Respuestas Tipo".',
                      'Cuando copies algo, aparecerá en el historial. Arrástralo a la categoría correcta para guardarlo permanentemente.'
                  ]},
              ]},
              { os: 'windows', title: 'Ditto (Recomendado)', content: [
                  { type: 'link', content: 'https://ditto-cp.sourceforge.io' },
                  { type: 'list', title: 'Gratuito y de código abierto.', content: [
                      'Descarga e instala la aplicación.',
                      'Configura tu atajo de teclado (ej. `Ctrl + Shift + B`) en las opciones.',
                      'Para crear grupos (equivalente a categorías), haz clic derecho sobre un ítem del historial y selecciona "Add to Group" > "Create New Group".'
                  ]},
              ]},
              { os: 'alternatives', title: 'Alternativas Gratuitas', content: [
                  { type: 'list', content: [
                      '**Mac:** Flycut',
                      '**Windows:** ClipClip'
                  ]}
              ]}
          ]}
        ]
      }
    ]
  },
   {
    id: 'interprete',
    title: 'Bloque 4: El Intérprete',
    subtitle: 'Convierte cualquier audio o video en texto procesable.',
    icon: <InterpreteIcon />,
    complete: [
      {
        id: 'interprete-problem',
        title: 'El Problema: Información Bloqueada en Audio',
        content: [
          { type: 'paragraph', content: 'Tienes una reunión grabada de 45 minutos o una nota de voz de 8 minutos. La información está ahí, pero no puedes editarla, resumirla, buscar en ella o reorganizarla fácilmente. El audio es información "congelada". Al convertirlo a texto, se vuelve "líquida" y procesable.' },
        ],
        interlink: { text: 'Ver detalles de implementación →', targetId: 'interprete-how' }
      },
      {
        id: 'interprete-solution',
        title: 'La Solución: Transcripción Potenciada por IA',
        content: [
           { type: 'list', content: [
               '**Actas y Resúmenes Automáticos:** Transcribe una reunión de 45 min y pídele a la IA: "Extrae decisiones, tareas asignadas y próximos pasos". Obtienes un acta en 3 minutos.',
               '**Notas de Voz a Contenido:** Convierte una nota de voz informal en un email profesional, un post de LinkedIn o un documento técnico.',
               '**Análisis Profundo:** Pide a la IA que identifique patrones, preocupaciones recurrentes o puntos sin resolver en una conversación transcrita.',
               '**Traducción Contextual:** Transcribe una conversación bilingüe a un solo idioma, manteniendo el contexto.'
           ]}
        ]
      }
    ],
    quick: [
      {
        id: 'interprete-how',
        title: 'Cómo Implementarlo',
        content: [
          { type: 'paragraph', content: 'Existen varias herramientas para transcribir audio, desde servicios web sencillos hasta modelos potentes que puedes ejecutar en tu ordenador.' },
          { type: 'list', content: [
            '**Opción 1: Rápida (Ocasional) - Hugging Face Whisper:** Ideal para audios cortos y esporádicos sin necesidad de instalar nada. Simplemente arrastra tu archivo a su interfaz web.',
            '**Opción 2: Potente (Recomendada) - Gemini AI Studio:** Excelente para audios con múltiples idiomas. Sube tu archivo de audio (hasta 2 horas) a AI Studio y usa un prompt para indicarle que unifique la transcripción en un solo idioma.',
            '**Opción 3: Alto Volumen (Avanzado) - Whisper Local:** Para procesar muchos audios o extraer audio de videos. Requiere una instalación técnica (Python, ffmpeg) pero ofrece máxima potencia y privacidad.'
          ]},
           { type: 'alert', title: 'Ejemplos de Comandos (Whisper Local)', content: 'Estos son ejemplos conceptuales para la Opción 3. Su uso requiere una configuración previa.'},
           { type: 'code', lang:'bash', title: 'Convertir video a audio WAV (con ffmpeg):', content: `ffmpeg -i "mi_video.mp4" -ar 16000 -ac 1 -c:a pcm_s16le "audio_salida.wav"`},
           { type: 'code', lang:'bash', title: 'Transcribir archivo de audio (con whisper.cpp):', content: `whisper-cli -m "ggml-base.bin" -f "audio_salida.wav" -otxt`}
        ]
      }
    ]
  }
];
