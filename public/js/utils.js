var eatz = eatz || {};

eatz.utils = {

    // Asynchronously load templates located in separate .html files
    loadTemplates: function(views, callback) {

        var deferreds = [];
        console.log('loading templates');

        $.each(views, function(index, view) {
            console.log('tpl/' + view + '.html');

            if (eatz[view]) {
                deferreds.push($.get('tpl/' + view + '.html', function(data) {
                    eatz[view].prototype.template = _.template(data);
                }));
            } else {
                console.log(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    },

    passValidation : function(inputID){

    },

    failValidation : function(inputID, error) {
        _.each(error, function (error) {
            var controlGroup = this.$('.' + error.field);
            controlGroup.addClass('error');
            controlGroup.find('.help-inline').text(error.message);
        }, this);
    }
};
