// ColdEmitter - ?
const a = new ColdEmitter()
// 1. сохранить событие 'wait' в внутренней очереди, переопределить emit
// -- структура внутренней очереди может содержать все коллбэки, которые уже были выполнены
// -- { name: 'wait', callbacks: [] } коллбэки вначале пустые
a.emit('wait')
// 2. когда новое событие инициируется, вызывается каждый зарегистрированный коллбэк один раз
// -- сравниваются функции коллбэка события с выполненными
// 3. когда новый коллбэк зарегистрирован для 'wait', коллбэк должен быть вызван
// 4. 'newListener' может помочь проверить, какие коллбэки все еще нужно выполнить
a.on('wait', () => {
  console.log('still executed')
})
