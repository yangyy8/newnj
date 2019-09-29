import validate from './validate'

var formElements = {
  input: {
    condition(directiveEl) {
      //console.log(directiveEl.type_)
      if (directiveEl.type_ == 'input' || directiveEl.type_ == 'textarea') {
        directiveEl.eventEl_ = directiveEl.querySelector(directiveEl.type_)
        return true
      }
    },
    bindEvent(directiveEl) {

      var eventEl = directiveEl.eventEl_
      var delay_ = parseInt(directiveEl.getAttribute('data-delay'))
      var { delay, lazy } = directiveEl.binding.modifiers
      if (delay_) {
        delay = delay_
      } else {
        delay = delay ? 500 : false
      }
      var delaying = false

      // ie10 11 使用placeholder时，进入页面会主动触发一次input事件
      // 这里采用延时绑定规避这一情况
      eventEl.onfocus = () => {
        //console.log("value1",directiveEl.eventEl_.value)
        eventEl.onfocus = null;
        eventEl.onchange = eventEl.onblur = eventEl.oninput = (e) => {

          // .lazy修饰符
          if (lazy && e.type == 'input') return
          // .delay修饰符
          if (delay && e.type == 'input') {
            if (delaying) {
              return
            }
            delaying = true
            setTimeout(() => {
              delaying = false
            }, delay);
          }
          var value = this.getValue(directiveEl)||e.target.value
          //console.log("e.target.value",e.target.value)
          //console.log("value2",value)
          validate(directiveEl, value)
        }
      }
    },
    getValue(directiveEl) {
      return directiveEl.eventEl_.value.replace(/^\s+|\s+$/g, "")
    },
    resetValue(directiveEl) {
      directiveEl.eventEl_.value = ''
    }
  },
  checks: {
    condition(directiveEl) {
      if (directiveEl.type_ == 'checkbox' || directiveEl.type_ == 'radio') {
        directiveEl.checks_ = directiveEl.querySelectorAll(`[type=${directiveEl.type_}]`)
        return true
      }
    },
    bindEvent(directiveEl) {

      var checks = directiveEl.checks_
      for (var i = 0; i < checks.length; i++) {
        checks[i].onchange = (e) => {
          var value = this.getValue(directiveEl)
          validate(directiveEl, value)
        }
      }
    },
    getValue(directiveEl) {
      var value = directiveEl.type_ == 'radio' ? '' : []
      var checks = directiveEl.checks_
      for (var i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
          if (value === '') {
            value = checks[i].value
            break
          } else {
            value.push(checks[i].value)
          }
        }
      }
      return value
    },
    resetValue(directiveEl) {
      var checks = directiveEl.checks_
      for (var i = 0; i < checks.length; i++) {
        checks[i].checked = false
      }
    }
  },
  select: {
    condition(directiveEl) {
      if (directiveEl.type_ == 'select') {
        directiveEl.eventEl_ = directiveEl.querySelector('input')
        return true
      }
    },
    bindEvent(directiveEl, binding) {
      var eventEl = directiveEl.eventEl_ || directiveEl
      eventEl.onchange = (e) => {
        var value = this.getValue(directiveEl)
        validate(directiveEl, value)
      }
    },
    getValue(directiveEl) {
      var eventEl = directiveEl.eventEl_ || directiveEl
      var value = directiveEl.eventEl_.value
      //console.log('value',value)
      return value
    },
    resetValue(directiveEl) {
      var eventEl = directiveEl.eventEl_ || directiveEl
      // eventEl.value = ''
    }
  },
  multiple: {
    condition(directiveEl) {
      if (directiveEl.type_ == 'multiple') {
        directiveEl.eventEl_ = directiveEl.querySelector('input')
        //console.log("directiveEl.eventEl_",directiveEl.eventEl_)
        return true
      }
    },
    bindEvent(directiveEl, binding) {
      //console.log("directiveEl",directiveEl)
      // directiveEl.eventEl_ = directiveEl.querySelector('input')
      var eventEl = directiveEl.querySelector('input')
      eventEl.onchange = (e) => {
        var value = this.getValue(directiveEl)
        validate(directiveEl, value)
      }
    },
    getValue(directiveEl) {
      var eventEl = directiveEl.querySelector('.el-select__tags-text')
      //console.log("eventEl",eventEl)
      var value;
      if(eventEl){
        value= eventEl.innerText||'';
      }else{
        value= '';
      }
      //console.log('value',value)
      return value
    },
    resetValue(directiveEl) {
      var eventEl = directiveEl.eventEl_ || directiveEl
      // eventEl.value = ''
    }
  },
  custom: { // 自定义元素
    condition(directiveEl) {
      return directiveEl.type_ == 'custom'
    },
    bindEvent(directiveEl) {
      directiveEl.bindEvent(validate)
    },
    getValue(directiveEl) {
      return directiveEl.getValue()
    },
    resetValue(directiveEl) {
      directiveEl.reset()
    }
  },
}

export default {
  bindEvent(directiveEl, binding) {
    var eles = Object.keys(formElements)
    for (var i = 0; i < eles.length; i++) {
      if (formElements[eles[i]].condition(directiveEl)) {
        formElements[eles[i]].bindEvent(directiveEl, binding)
        return
      }
    }
  },

  resetSingleValue(directiveEl) {

    var formElementsKeys = Object.keys(formElements)
    for (var j = 0; j < formElementsKeys.length; j++) {
      if (formElements[formElementsKeys[j]].condition(directiveEl)) { // 符合条件的元素进行清除
        formElements[formElementsKeys[j]].resetValue(directiveEl)
        break
      }
    }
  },
  resetValue(scope) {
    var els = document.querySelectorAll(`[data-scope=${scope}]`)
    for (var i = 0; i < els.length; i++) {
      this.resetSingleValue(els[i])
    }
  },
  getValue(directiveEl) {
    var formElementsKeys = Object.keys(formElements)
    for (var i = 0; i < formElementsKeys.length; i++) {
      if (formElements[formElementsKeys[i]].condition(directiveEl)) { // 符合条件的元素进行清除
        return formElements[formElementsKeys[i]].getValue(directiveEl)
      }
    }
  },
}
