import _ from 'lodash';
import FormioExportUtils from '../../../../utils';

export default (element, component) => {
  if (component && component.components) {
    let componentElement = FormioExportUtils.createElement('div', {
      class: `formio-component ${component.type}-component`,
      id: Math.random().toString(36).substring(7)
    });

    componentElement.appendChild(FormioExportUtils.createElement('h1', { class: 'form-title' }, component.title));

    if (component._options.submission) {

      if (component._options.submission.hasOwnProperty('id')) {
        const boldElement = FormioExportUtils.createElement('b', {}, 'SA submission ID: ');
        componentElement.appendChild(FormioExportUtils.createElement('div', { class: 'row' },
          FormioExportUtils.createElement('div', { class: 'col text-center' }, boldElement, `${component._options.submission.id}`)
        )
        );
      }
    }

    componentElement.appendChild(FormioExportUtils.createElement('br'));

    _.forEach(component.components, (c) => {
      if (c) {
        c.toHtml(componentElement);
      }
    });

    if (_.isElement(element)) {
      element.appendChild(componentElement);
    }
    return componentElement;
  }
  return null;
};
