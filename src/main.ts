import './styles.css';
import { mountWar } from './app';

mountWar(document.getElementById('app')!, {
  key: 'ww1',
  title: 'Timeline of the First World War',
  subtitle: '1914–1918 · events drawn from Wikidata',
  range: [1914, 1919],
});
