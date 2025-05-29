import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  translations: Record<string, Record<string, string>>;
}

const translations = {
  en: {
    settings: "Settings",
    general_settings: "General Settings",
    manage_preferences: "Manage your account preferences",
    admin_name: "Admin Name",
    email_address: "Email Address",
    time_zone: "Time Zone",
    language: "Language",
    date_format: "Date Format",
    notifications: "Notifications",
    security: "Security",
    save_changes: "Save Changes",
    saving: "Saving...",
    logout: "Logout",
    manage_notification_preferences: "Manage your notification preferences",
    email_notifications: "Email Notifications",
    receive_email_notifications: "Receive notifications via email",
    new_school_registration: "New School Registration",
    get_notified_when_a_new_school_registers: "Get notified when a new school registers",
    new_student_application: "New Student Application",
    get_notified_about_new_student_applications: "Get notified about new student applications",
    system_updates: "System Updates",
    get_notified_about_system_updates: "Get notified about system updates and maintenance",
    manage_security_preferences: "Manage your security preferences",
    two_factor_authentication: "Two-Factor Authentication",
    enable_two_factor_authentication_for_added_security: "Enable two-factor authentication for added security",
    login_notifications: "Login Notifications",
    get_notified_of_new_login_attempts: "Get notified of new login attempts to your account"
  },
  es: {
    settings: "Configuración",
    general_settings: "Configuración General",
    manage_preferences: "Administra tus preferencias de cuenta",
    admin_name: "Nombre del Administrador",
    email_address: "Correo Electrónico",
    time_zone: "Zona Horaria",
    language: "Idioma",
    date_format: "Formato de Fecha",
    dark_mode: "Modo Oscuro",
    notifications: "Notificaciones",
    security: "Seguridad",
    save_changes: "Guardar Cambios",
    saving: "Guardando...",
    logout: "Cerrar Sesión",
    manage_notification_preferences: "Administra tus preferencias de notificación",
    email_notifications: "Notificaciones por Correo",
    receive_email_notifications: "Recibir notificaciones por correo electrónico",
    new_school_registration: "Registro de Nueva Escuela",
    get_notified_when_a_new_school_registers: "Recibe notificaciones cuando se registra una nueva escuela",
    new_student_application: "Nueva Solicitud de Estudiante",
    get_notified_about_new_student_applications: "Recibe notificaciones sobre nuevas solicitudes de estudiantes",
    system_updates: "Actualizaciones del Sistema",
    get_notified_about_system_updates: "Recibe notificaciones sobre actualizaciones y mantenimiento",
    manage_security_preferences: "Administra tus preferencias de seguridad",
    two_factor_authentication: "Autenticación de Dos Factores",
    enable_two_factor_authentication_for_added_security: "Habilita la autenticación de dos factores para mayor seguridad",
    login_notifications: "Notificaciones de Inicio de Sesión",
    get_notified_of_new_login_attempts: "Recibe notificaciones de nuevos intentos de inicio de sesión"
  },
  fr: {
    settings: "Paramètres",
    general_settings: "Paramètres Généraux",
    manage_preferences: "Gérez vos préférences de compte",
    admin_name: "Nom de l'Administrateur",
    email_address: "Adresse Email",
    time_zone: "Fuseau Horaire",
    language: "Langue",
    date_format: "Format de Date",
    dark_mode: "Mode Sombre",
    notifications: "Notifications",
    security: "Sécurité",
    save_changes: "Enregistrer",
    saving: "Enregistrement...",
    logout: "Déconnexion",
    manage_notification_preferences: "Gérez vos préférences de notification",
    email_notifications: "Notifications par Email",
    receive_email_notifications: "Recevoir des notifications par email",
    new_school_registration: "Inscription d'une Nouvelle École",
    get_notified_when_a_new_school_registers: "Soyez notifié quand une nouvelle école s'inscrit",
  },
  de: {
    settings: "Einstellungen",
    general_settings: "Allgemeine Einstellungen",
    manage_preferences: "Verwalten Sie Ihre Kontoeinstellungen",
    admin_name: "Administrator-Name",
    email_address: "E-Mail-Adresse",
    time_zone: "Zeitzone",
    language: "Sprache",
    date_format: "Datumsformat",
    dark_mode: "Dunkelmodus",
    notifications: "Benachrichtigungen",
    security: "Sicherheit",
    save_changes: "Änderungen Speichern",
    saving: "Speichern...",
    logout: "Abmelden",
  },
  pt: {
    settings: "Configurações",
    general_settings: "Configurações Gerais",
    manage_preferences: "Gerencie suas preferências de conta",
    admin_name: "Nome do Administrador",
    email_address: "Endereço de Email",
    time_zone: "Fuso Horário",
    language: "Idioma",
    date_format: "Formato de Data",
    dark_mode: "Modo Escuro",
    notifications: "Notificações",
    security: "Segurança",
    save_changes: "Salvar Alterações",
    saving: "Salvando...",
    logout: "Sair",
  },
  zh: {
    settings: "设置",
    general_settings: "常规设置",
    manage_preferences: "管理您的帐户首选项",
    admin_name: "管理员名称",
    email_address: "电子邮件地址",
    time_zone: "时区",
    language: "语言",
    date_format: "日期格式",
    dark_mode: "深色模式",
    notifications: "通知",
    security: "安全",
    save_changes: "保存更改",
    saving: "保存中...",
    logout: "退出登录",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  setLanguage: () => {},
  translations: translations,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}; 