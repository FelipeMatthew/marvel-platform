import wandaPicture from '../../assets/images/characters/wanda.jpeg'
import spiderManPicture from '../../assets/images/characters/spider-man.jpeg'
import thanosPicture from '../../assets/images/characters/thanos.jpeg'
import hulkPicture from '../../assets/images/characters/hulk.jpeg'

import { CardProps } from '../../components/Card'


export const wandaCard: CardProps = {
    image: wandaPicture,
    title: 'Wanda Maximoff',
    content: 'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.' 
}

export const spiderManCard: CardProps = {
  image: spiderManPicture,
  title: 'Spider Man',
  content: 'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.' 
}

export const thanosCard: CardProps = {
  image: thanosPicture,
  title: 'Thanos',
  content: "A lua Titã era governa'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.", 
}

export const hulkCard: CardProps = {
  image: hulkPicture,
  title: 'Hulk',
  content: 'Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.' 
}