<script>
import FormBuilders from './FormBuilders.js'
import FormDirector from './FormDirector.js'

export default {
  props: ['formMethod'],
  render(h) {
    const builder = new FormBuilders(h)
    const director = new FormDirector()

    director[this.formMethod](builder)
    return builder.getForm()
  }
}
</script>
