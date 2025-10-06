// hooks/useDate.ts
import { useMemo } from "react";

export const useDate = () => {
  const formatDate = (dateString, options = {}) => {
    const {
      locale = "es-ES",
      timeZone = "UTC",
      format = "medium",
      customFormat,
    } = options;

    const date = new Date(dateString);

    const formatOptions = customFormat || {
      timeZone,
    };

    if (!customFormat) {
      switch (format) {
        case "full":
          formatOptions.dateStyle = "full";
          formatOptions.timeStyle = "short";
          break;
        case "long":
          formatOptions.year = "numeric";
          formatOptions.month = "long";
          formatOptions.day = "numeric";
          formatOptions.hour = "2-digit";
          formatOptions.minute = "2-digit";
          break;
        case "short":
          formatOptions.year = "numeric";
          formatOptions.month = "numeric";
          formatOptions.day = "numeric";
          break;
        case "medium":
        default:
          formatOptions.year = "numeric";
          formatOptions.month = "short";
          formatOptions.day = "numeric";
          formatOptions.hour = "2-digit";
          formatOptions.minute = "2-digit";
      }
    }

    return date.toLocaleString(locale, formatOptions);
  };

  const formatRelativeTime = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals = {
      año: 31536000,
      mes: 2592000,
      semana: 604800,
      día: 86400,
      hora: 3600,
      minuto: 60,
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsInUnit);
      if (interval >= 1) {
        return `Hace ${interval} ${unit}${interval === 1 ? "" : "s"}`;
      }
    }

    return "Hace unos segundos";
  };

  return {
    formatDate,
    formatRelativeTime,
  };
};
