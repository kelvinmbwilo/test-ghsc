/*
 * Electronic Logistics Management Information System (eLMIS) is a supply chain management system for health commodities in a developing country setting.
 *
 * Copyright (C) 2015  John Snow, Inc (JSI). This program was produced for the U.S. Agency for International Development (USAID). It was prepared under the USAID | DELIVER PROJECT, Task Order 4.
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function CreateEquipmentLineItemController($scope) {

  $scope.showCategory = function (index) {
    var absIndex = ($scope.pageSize * ($scope.currentPage - 1)) + index;
    return !((index > 0 ) && ($scope.rnr.equipmentLineItems.length > absIndex) && ($scope.rnr.equipmentLineItems[absIndex].equipmentCategory == $scope.rnr.equipmentLineItems[absIndex - 1].equipmentCategory));
  };

  $scope.getId = function (prefix, parent) {
    return prefix + "_" + parent.$parent.$index;
  };

  $scope.equipmentStatusChanged = function (equipmentLineItem) {
    var currentStatus = _.findWhere($scope.$parent.equipmentOperationalStatus, {'id': utils.parseIntWithBaseTen(equipmentLineItem.operationalStatusId)});
    angular.forEach(equipmentLineItem.relatedProducts, function (product) {
      var lineItem = _.findWhere($scope.$parent.rnr.fullSupplyLineItems, {productCode: product.code});
      if (!isUndefined(lineItem)) {
        if (currentStatus.isBad && lineItem.quantityRequested > 0) {
          lineItem.isEquipmentValid = false;
        } else {
          lineItem.isEquipmentValid = true;
        }
      }
    });
  };

  $scope.requiresRemarks = function (equipmentLineItem) {
    var currentStatus = _.findWhere($scope.$parent.$parent.equipmentOperationalStatus, {'id': utils.parseIntWithBaseTen(equipmentLineItem.operationalStatusId)});
    if (isUndefined(currentStatus) || !currentStatus.isBad || !utils.isEmpty(equipmentLineItem.remarks) ) {
      return false;
    }

    return _.any(equipmentLineItem.relatedProducts, function (product) {
      var lineItem = _.findWhere($scope.$parent.rnr.fullSupplyLineItems, {productCode: product.code});
      if (!isUndefined(lineItem) && utils.parseIntWithBaseTen(lineItem.quantityRequested) > 0) {
        return true;
      }
      return false;
    });
  };

}