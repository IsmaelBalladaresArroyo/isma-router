import {Link} from '../Link'

const i18n ={
  es: {
    title: 'Sobre Nosotros',
    button: 'Ir a la home',
    description: '¡Hola! Ana y Ismael estan creando un clon de React Router.'
  },
  en: {
    title: 'About us',
    description: 'Hi! Ana y Ismael are creating a clone of React Router.',
    button: 'Go to Home page',
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.es
}

export default function AboutPage({ routeParams }) {
    const i18n = useI18n(routeParams.lang ?? 'es')
    return (
  <>
      <h1>{i18n.title}</h1>
      <div>
        <img src="https://pbs.twimg.com/profile_images/1814436154604658689/DscVi8qh_400x400.jpg" alt="Foto mia xd" />
      </div>
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
      </>
    )}