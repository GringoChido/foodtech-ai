interface TopicResponse {
  en: string;
  es: string;
  followUps: {
    en: string[];
    es: string[];
  };
}

const topics: Record<string, { keywords: string[]; response: TopicResponse }> = {
  xtock: {
    keywords: ['xtock', 'inventory', 'ordering', 'waste', 'back of house', 'produce', 'food waste'],
    response: {
      en: "Xtock is your AI inventory teammate. It analyzes your sales patterns, vendor lead times, and waste history to generate smart ordering suggestions — delivered via WhatsApp every morning. You approve with a thumbs up, and the order goes out. It saves operators an average of 45 minutes per day and reduces waste by up to 30%.",
      es: "Xtock es tu compañero de inventario con IA. Analiza tus patrones de ventas, tiempos de entrega de proveedores e historial de desperdicio para generar sugerencias inteligentes de pedidos, entregadas por WhatsApp cada mañana. Apruebas con un pulgar arriba y el pedido se envía. Ahorra a los operadores un promedio de 45 minutos por día y reduce el desperdicio hasta en un 30%.",
      followUps: {
        en: ["How does Xtock integrate with my POS?", "What does the onboarding process look like?", "How much does Xtock cost?"],
        es: ["¿Cómo se integra Xtock con mi POS?", "¿Cómo es el proceso de incorporación?", "¿Cuánto cuesta Xtock?"],
      },
    },
  },
  vostre: {
    keywords: ['voztre', 'voice', 'phone', 'orders', 'front of house', '3pd', 'commission', 'calls', 'calling'],
    response: {
      en: "Voztre is your AI voice agent that handles phone and WhatsApp orders 24/7. It never misses a call, never puts customers on hold, and processes orders directly into your POS — zero 3PD commissions. Restaurants using Voztre recover thousands per month in orders that would have been lost or sent through high-commission delivery apps.",
      es: "Voztre es tu agente de voz con IA que maneja pedidos por teléfono y WhatsApp las 24 horas. Nunca pierde una llamada, nunca pone a los clientes en espera y procesa los pedidos directamente en tu POS — cero comisiones de terceros. Los restaurantes que usan Voztre recuperan miles por mes en pedidos que se habrían perdido o enviado a través de apps de delivery con altas comisiones.",
      followUps: {
        en: ["Can Voztre handle both English and Spanish?", "What happens if Voztre can't answer a question?", "How does Voztre connect to my menu?"],
        es: ["¿Voztre puede manejar inglés y español?", "¿Qué pasa si Voztre no puede responder una pregunta?", "¿Cómo se conecta Voztre a mi menú?"],
      },
    },
  },
  pricing: {
    keywords: ['pricing', 'cost', 'price', 'how much', 'precio', 'costo', 'cuanto'],
    response: {
      en: "We share specific pricing during your pilot onboarding call. Our model is designed so the AI pays for itself within the first month through recovered margins and reduced waste. There are no setup fees, no contracts, and the pilot is risk-free.",
      es: "Compartimos los precios específicos durante tu llamada de incorporación al piloto. Nuestro modelo está diseñado para que la IA se pague sola dentro del primer mes a través de márgenes recuperados y reducción de desperdicio. No hay tarifas de configuración, ni contratos, y el piloto es sin riesgo.",
      followUps: {
        en: ["How do I join the pilot waitlist?", "What's included in the trial?", "How quickly will I see ROI?"],
        es: ["¿Cómo me uno a la lista de espera del piloto?", "¿Qué incluye la prueba?", "¿Qué tan rápido veré el retorno de inversión?"],
      },
    },
  },
  pilot: {
    keywords: ['pilot', 'waitlist', 'join', 'sign up', 'apply', 'start', 'trial', 'lista', 'espera', 'unir', 'prueba'],
    response: {
      en: "We're currently accepting applications for our Founding Pilot program. Priority goes to 4–15 unit fast-casual groups. The pilot includes a 30-day Xtock trial and a 7-day Voztre trial — no contracts, no setup fees. Scroll down to the waitlist form to apply, and we'll be in touch within 48 hours!",
      es: "Actualmente estamos aceptando solicitudes para nuestro programa de Piloto Fundador. La prioridad es para grupos de comida rápida casual de 4 a 15 unidades. El piloto incluye una prueba de 30 días de Xtock y una prueba de 7 días de Voztre — sin contratos, sin tarifas de configuración. ¡Desplázate hacia abajo al formulario de lista de espera para aplicar, y te contactaremos dentro de 48 horas!",
      followUps: {
        en: ["What systems do you integrate with?", "How long is the onboarding?", "Is my data secure?"],
        es: ["¿Con qué sistemas se integran?", "¿Cuánto dura la incorporación?", "¿Mis datos están seguros?"],
      },
    },
  },
  onboarding: {
    keywords: ['onboarding', 'setup', 'integrate', 'connect', 'how long', 'implementation', 'configuracion', 'implementacion'],
    response: {
      en: "Onboarding takes just 8 days: Day 1 is a 24-hour white-glove connection to your POS and inventory systems. Days 2–3, your AI teammate does a 48-hour shift study. Days 3–8 is the Confidence Phase where every decision needs your approval. After Day 8, you choose your autonomy level. We handle all the technical setup — you don't need an IT team.",
      es: "La incorporación toma solo 8 días: El Día 1 es una conexión de guante blanco de 24 horas a tus sistemas de POS e inventario. Los Días 2–3, tu compañero de IA hace un estudio de turnos de 48 horas. Los Días 3–8 es la Fase de Confianza donde cada decisión necesita tu aprobación. Después del Día 8, tú eliges tu nivel de autonomía. Nosotros manejamos toda la configuración técnica — no necesitas un equipo de TI.",
      followUps: {
        en: ["What if the AI makes a mistake?", "Can I keep human approval forever?", "What POS systems do you support?"],
        es: ["¿Qué pasa si la IA comete un error?", "¿Puedo mantener la aprobación humana para siempre?", "¿Qué sistemas POS soportan?"],
      },
    },
  },
  security: {
    keywords: ['safe', 'security', 'data', 'privacy', 'secure', 'encrypt', 'seguro', 'seguridad', 'datos', 'privacidad'],
    response: {
      en: "Enterprise-grade encryption in transit and at rest. We never sell your data. We never train on your data. Your operational intelligence stays yours. We follow industry best practices for data handling and security compliance.",
      es: "Cifrado de nivel empresarial en tránsito y en reposo. Nunca vendemos tus datos. Nunca entrenamos con tus datos. Tu inteligencia operacional sigue siendo tuya. Seguimos las mejores prácticas de la industria para el manejo de datos y cumplimiento de seguridad.",
      followUps: {
        en: ["How do you handle POS credentials?", "Who has access to my data?", "Do you have SOC 2 compliance?"],
        es: ["¿Cómo manejan las credenciales del POS?", "¿Quién tiene acceso a mis datos?", "¿Tienen cumplimiento SOC 2?"],
      },
    },
  },
  trust: {
    keywords: ['mistake', 'wrong', 'error', 'bad order', 'trust', 'control', 'veto', 'approve', 'confianza', 'error', 'aprobar'],
    response: {
      en: "You always have 100% veto power — forever. During the 7-Day Confidence Phase, every single decision goes through you via WhatsApp before being executed. After Day 8, you choose how much autonomy to give. And even in full-autonomy mode, you can override any decision at any time. The AI is your teammate, not your boss.",
      es: "Siempre tienes 100% de poder de veto — para siempre. Durante la Fase de Confianza de 7 días, cada decisión pasa por ti vía WhatsApp antes de ejecutarse. Después del Día 8, tú eliges cuánta autonomía dar. E incluso en modo de autonomía total, puedes anular cualquier decisión en cualquier momento. La IA es tu compañero de equipo, no tu jefe.",
      followUps: {
        en: ["How does the approval process work on WhatsApp?", "What happens during the Confidence Phase?", "Can I adjust autonomy levels later?"],
        es: ["¿Cómo funciona el proceso de aprobación en WhatsApp?", "¿Qué sucede durante la Fase de Confianza?", "¿Puedo ajustar los niveles de autonomía después?"],
      },
    },
  },
  integrations: {
    keywords: ['systems', 'pos', 'integration', 'compatible', 'toast', 'square', 'clover', 'integracion', 'compatible', 'sistema'],
    response: {
      en: "We offer white-glove credentialing and connect to major POS and inventory systems including Toast, Square, Clover, and more. We handle the entire technical setup — you don't need an IT team. Our integration process is part of the Day 1 onboarding and typically takes less than 24 hours.",
      es: "Ofrecemos acreditación de guante blanco y nos conectamos a los principales sistemas de POS e inventario, incluyendo Toast, Square, Clover y más. Manejamos toda la configuración técnica — no necesitas un equipo de TI. Nuestro proceso de integración es parte de la incorporación del Día 1 y típicamente toma menos de 24 horas.",
      followUps: {
        en: ["Do you work with my specific POS?", "How long does integration take?", "What data do you need from my systems?"],
        es: ["¿Funcionan con mi POS específico?", "¿Cuánto tiempo toma la integración?", "¿Qué datos necesitan de mis sistemas?"],
      },
    },
  },
  founder: {
    keywords: ['founder', 'felipe', 'who', 'team', 'company', 'about', 'fundador', 'equipo', 'empresa', 'quien'],
    response: {
      en: "FoodTech AI was founded by Felipe Gómez, who spent 20 years in the restaurant industry — not behind a screen, but behind a line. He built FoodTech AI for the midnight moment when a tired operator needs a teammate who's already done the math. The company is focused on building AI teammates that remove operational drag for multi-unit restaurant operators.",
      es: "FoodTech AI fue fundada por Felipe Gómez, quien pasó 20 años en la industria restaurantera — no detrás de una pantalla, sino detrás de una línea. Construyó FoodTech AI para el momento de medianoche cuando un operador cansado necesita un compañero que ya hizo las cuentas. La empresa se enfoca en construir compañeros de IA que eliminan la carga operacional para operadores de restaurantes multi-unidad.",
      followUps: {
        en: ["What makes FoodTech AI different from other tools?", "How can I join the pilot program?", "Where is FoodTech AI based?"],
        es: ["¿Qué hace diferente a FoodTech AI de otras herramientas?", "¿Cómo puedo unirme al programa piloto?", "¿Dónde está basado FoodTech AI?"],
      },
    },
  },
};

const fallback: TopicResponse = {
  en: "I don't have the answer to that specific question, but our team would love to help. Scroll down to join the pilot waitlist and we'll be in touch within 48 hours!",
  es: "No tengo la respuesta a esa pregunta específica, pero a nuestro equipo le encantaría ayudarte. ¡Desplázate hacia abajo para unirte a la lista de espera del piloto y te contactaremos dentro de 48 horas!",
  followUps: {
    en: ["Tell me about Xtock", "Tell me about Voztre", "How do I join the pilot?"],
    es: ["Cuéntame sobre Xtock", "Cuéntame sobre Voztre", "¿Cómo me uno al piloto?"],
  },
};

const normalize = (text: string): string =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim();

export interface ChatResponse {
  answer: string;
  followUps: string[];
}

export const getGreeting = (locale: 'en' | 'es'): ChatResponse => ({
  answer: locale === 'en'
    ? "Hi! I'm the FoodTech AI assistant. I can answer questions about Xtock, Voztre, pricing, onboarding, security, and more. How can I help?"
    : "¡Hola! Soy el asistente de FoodTech AI. Puedo responder preguntas sobre Xtock, Voztre, precios, incorporación, seguridad y más. ¿En qué puedo ayudarte?",
  followUps: locale === 'en'
    ? ["What is Xtock?", "What is Voztre?", "How do I join the pilot?"]
    : ["¿Qué es Xtock?", "¿Qué es Voztre?", "¿Cómo me uno al piloto?"],
});

export const matchResponse = (input: string, locale: 'en' | 'es'): ChatResponse => {
  const normalized = normalize(input);
  const words = normalized.split(/\s+/);

  let bestTopic: TopicResponse | null = null;
  let bestScore = 0;

  for (const topic of Object.values(topics)) {
    let score = 0;
    for (const keyword of topic.keywords) {
      const normalizedKeyword = normalize(keyword);
      if (normalizedKeyword.includes(' ')) {
        if (normalized.includes(normalizedKeyword)) score += 2;
      } else {
        if (words.includes(normalizedKeyword)) score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestTopic = topic.response;
    }
  }

  if (bestTopic && bestScore >= 1) {
    return {
      answer: bestTopic[locale],
      followUps: bestTopic.followUps[locale],
    };
  }

  return {
    answer: fallback[locale],
    followUps: fallback.followUps[locale],
  };
};
