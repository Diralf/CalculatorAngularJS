(function () {
    var module = angular.module('calculator-service', []);

    module.service('calculatorService', function () {
        this.setValues = function (x, y, operation) {
            this.x = x;
            this.y = y;
            this.operation = operation;
        };
        this.getValues = function () {
            return {
                x: this.x,
                y: this.y,
                operation: this.operation
            };
        };
    });
})();





