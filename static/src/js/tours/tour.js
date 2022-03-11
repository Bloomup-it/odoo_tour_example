odoo.define('odoo_tour_example.contacts', function (require) {
    'use strict';
    var core = require('web.core');
    var tour = require('web_tour.tour');
    var _t = core._t;

    tour.register('example_tour', {
        url: "/web#action=contacts.action_contacts",
        rainbowMan: true,
        rainbowManMessage: _t("<b> Congratulations! </b>"),
        sequence: 1000,
    },[
        {
            trigger: ".o-kanban-button-new",
            content: _t("Create your first contact."),
            position: "bottom"
        },
        {
            trigger: ".o_field_widget[name='company_type']",
            content: _t("Choose individual or company type."),
            position: "left"
        },
        {
            trigger: ".o_field_widget[name='name']",
            content: _t("Write the contact name."),
            position: "right"
        },
        {
            trigger: ".o_form_button_save",
            content: _t("Save contact"),
            position: "bottom"
        },
    ]);
});