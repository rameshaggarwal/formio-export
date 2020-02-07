import _ from 'lodash';
import FormioExportUtils from '../../../../utils';

export default (element, component) => {
  if (component && component.input) {
    if (component.key == 'addComment' && (_.isNil(component._value) || component._value === '')) {
      return null;
    }

    let componentElement = '';
    if (component.key === 'comments') {
      if (_.isNil(component._value) || component._value === '') return null;

      componentElement = FormioExportUtils.createElement('div', {
        class: `formio-component panel-component card`,
        id: Math.random().toString(36).substring(7)
      });
      let labelElement = FormioExportUtils.createElement('div', {
        class: 'component-label card-header'
      }, component.label);
      let valueElement = FormioExportUtils.createElement('div', {
        class: 'component-value card-body'
      });
      valueElement.innerHTML = component._value;
      componentElement.appendChild(labelElement);
      componentElement.appendChild(valueElement);
    }
    else {
      componentElement = FormioExportUtils.createElement('div', {
        class: `formio-component ${component.type}-component`,
        id: Math.random().toString(36).substring(7)
      });
      let labelElement = FormioExportUtils.createElement('div', {
        class: 'col component-label'
      }, component.label);
      let valueElement = FormioExportUtils.createElement('div', {
        class: 'col component-value'
      }, component.formatValue());

      if (!component.hideLabel && (!component.inDataGrid || component.dataGridLabel)) {
        labelElement.className += component._options.equalCols ? '' : ' col-sm-3';
        valueElement.className += component._options.equalCols ? '' : ' col-sm-9';
        componentElement.appendChild(labelElement);
      }
      componentElement.appendChild(valueElement);
    }
    if (_.isElement(element)) {
      element.appendChild(componentElement);
    }
    return componentElement;
  };
  return null;
};
