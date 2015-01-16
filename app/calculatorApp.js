(function () {
    var module = angular.module('calculator', ['calculator-service']);

    module.controller('inputController', ['calculatorService', function (calculatorService) {
            this.signs = operations;
            this.currentSign = this.signs[0].operation;
            this.pushValues = function () {
                calculatorService.setValues(+this.valueX, +this.valueY, this.currentSign);
            };
        }]);

    module.controller('outputController', ['calculatorService', function (calculatorService) {
            this.calcResult = function () {
                var data = calculatorService.getValues();
                if (data.x && data.y) {
                    this.result = data.operation(data.x, data.y);
                } else {
                    this.result = "invalid arguments!";
                }
            };
        }]);

    var operations = [
        {
            title: 'Add',
            operation: function (x, y) {
                return x + y;
            }
        },
        {
            title: 'Sub',
            operation: function (x, y) {
                return x - y;
            }
        },
        {
            title: 'Mul',
            operation: function (x, y) {
                return x * y;
            }
        },
        {
            title: 'Div',
            operation: function (x, y) {
                return x / y;
            }
        }
    ];
})();


