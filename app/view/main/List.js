Ext.define('testapp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'testapp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
    dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    items: [{  
      text: 'agregar componente',
      handler: function(){
    Ext.create('Ext.window.Window', {
    title: 'Forma Simple',
    bodyPadding: 5,
    width: 350,
    autoShow: true,	    

    url: 'save-form.php',

    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'Primer Nombre',
        name: 'first',
        allowBlank: false
    },{
        fieldLabel: 'Segundo Nombre',
        name: 'last',
        allowBlank: false
    }],

    // Reset and Submit buttons
    buttons: [{
        text: 'Resetear',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Enviar',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: function() {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                form.submit({
                    success: function(form, action) {
                       Ext.Msg.alert('Exito', action.result.msg);
                    },
                    failure: function(form, action) {
                        Ext.Msg.alert('Error', action.result.msg);
                    }
                });
            }
        }
    }]
    //renderTo: Ext.getBody()
});
        }
    }]
    }],
    listeners: {
        select: 'onItemSelected'
    }
});
