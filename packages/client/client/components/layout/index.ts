import { App } from 'vue'
import Layout from './k-layout.vue'
import Status from './k-status.vue'
import CardNumeric from './card-numeric.vue'
import Card from './card.vue'
import Content from './content.vue'
import Empty from './empty.vue'
import TabGroup from './tab-group.vue'
import TabItem from './tab-item.vue'

export default function (app: App) {
  app.component('k-layout', Layout)
  app.component('k-status', Status)
  app.component('k-numeric', CardNumeric)
  app.component('k-card', Card)
  app.component('k-content', Content)
  app.component('k-empty', Empty)
  app.component('k-tab-group', TabGroup)
  app.component('k-tab-item', TabItem)
}
