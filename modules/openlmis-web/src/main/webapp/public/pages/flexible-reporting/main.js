webpackJsonp([1, 5], {
    "+Cee": function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("+pb+"),
            o = (n.n(i), n("Gvdl")),
            r = (n.n(o), n("QweH")),
            s = n("W4zo");
        n.d(t, "a", function() {
            return d
        });
        var l = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            c = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            d = function() {
                function e(e, t) {
                    this.http = e, this.localDbService = t, this.metaData = {
                        organisationUnits: [],
                        dataElements: [],
                        indicators: [],
                        dataElementGroups: [],
                        indicatorGroups: [],
                        categoryOptions: [],
                        dataSets: []
                    }
                }
                return e.prototype.getIndicators = function() {
                    return this.http.get("indicators.json?fields=id,name,dataSets[periodType]&paging=false").map(function(e) {
                        return e.json().indicators || []
                    })
                }, e.prototype.getDataElements = function() {
                    return this.http.getRow("dataElements.json?fields=,id,name,valueType,categoryCombo,dataSetElements[dataSet[periodType]&paging=false&filter=domainType:eq:AGGREGATE&filter=valueType:ne:TEXT&filter=valueType:ne:LONG_TEXT").map(function(e) {
                        return e.json().dataElements || []
                    })
                }, e.prototype.getDataSets = function() {
                    return this.http.getRow("dataSets.json?paging=false&fields=id,name").map(function(e) {
                        return e.json().dataSets || []
                    })
                }, e.prototype.getCategoryCombos = function() {
                    return this.http.getRow("categoryCombos.json?fields=id,name,categoryOptionCombos[id,name]&paging=false").map(function(e) {
                        return e.json().categoryCombos || []
                    })
                }, e.prototype.getOrganisationUnits = function() {
                    return this.http.getRow("organisationUnits.json?fields=id,name,children,parent,path&paging=false").map(function(e) {
                        return e.json().organisationUnits || []
                    })
                }, e.prototype.getDataElementGroups = function() {
                    return this.http.getRow("dataElementGroups.json?paging=false&fields=id,name,dataElements[id,name,categoryCombo,dataSetElements[dataSet[periodType]]").map(function(e) {
                        return e.json().dataElementGroups || []
                    })
                }, e.prototype.getIndicatorGroups = function() {
                    return this.http.getRow("indicatorGroups.json?paging=false&fields=id,name,indicators[id,name,dataSets[periodType]]").map(function(e) {
                        return e.json().indicatorGroups || []
                    })
                }, e.prototype.getPrograms = function() {
                    return this.http.getRow("programs.json?paging=false&fields=id,name,programType").map(function(e) {
                        return e.json().programs || []
                    })
                }, e.prototype.initiateData = function() {
                    return o.Observable.forkJoin(this.getDataFromLocalDatabase(r.c), this.getDataFromLocalDatabase(r.d), this.getDataFromLocalDatabase(r.e), this.getDataFromLocalDatabase(r.f), this.getDataFromLocalDatabase(r.g), this.getDataFromLocalDatabase(r.h), this.getDataFromLocalDatabase(r.i))
                }, e.prototype.getFunctions = function() {
                    var e = this;
                    return new o.Observable(function(t) {
                        e.http.getRow("dataStore/functions").map(function(e) {
                            return e.json()
                        }).subscribe(function(n) {
                            var a = [];
                            n.forEach(function(t) {
                                a.push(e.http.getRow("dataStore/functions/" + t).map(function(e) {
                                    return e.json()
                                }))
                            }), o.Observable.forkJoin(a).subscribe(function(e) {
                                var n = [];
                                e.forEach(function(e, t) {
                                    n.push(e)
                                }), t.next(n), t.complete()
                            }, function(e) {})
                        }, function(e) {})
                    })
                }, e.prototype.getAllMappings = function() {
                    var e = this;
                    return new o.Observable(function(t) {
                        e.http.getRow("dataStore/functionMapper1").map(function(e) {
                            return e.json()
                        }).subscribe(function(e) {
                            t.next(e), t.complete()
                        }, function(e) {
                            t.error()
                        })
                    })
                }, e.prototype.getASytemInfo = function() {
                    var e = this;
                    return new o.Observable(function(t) {
                        e.http.getRow("system/info.json").map(function(e) {
                            return e.json()
                        }).subscribe(function(e) {
                            t.next(e), t.complete()
                        }, function(e) {
                            t.error()
                        })
                    })
                }, e.prototype.getHiddenDataElements = function() {
                    var e = this;
                    return new o.Observable(function(t) {
                        e.http.getRow("dataStore/dataElementsHiddenInPivot").map(function(e) {
                            return e.json()
                        }).subscribe(function(e) {
                            t.next(e), t.complete()
                        }, function(e) {
                            t.error()
                        })
                    })
                }, e.prototype.getRenamedDataElements = function() {
                    var e = this;
                    return new o.Observable(function(t) {
                        e.http.getRow("dataStore/renamedDataElementsInPivot/items").map(function(e) {
                            return e.json()
                        }).subscribe(function(e) {
                            t.next(e), t.complete()
                        }, function(e) {
                            t.error()
                        })
                    })
                }, e.prototype.getMapping = function(e) {
                    var t = this;
                    return new o.Observable(function(n) {
                        t.http.getRow("dataStore/functionMapper1/" + e).map(function(e) {
                            return e.json()
                        }).subscribe(function(e) {
                            n.next(e), n.complete()
                        }, function(e) {
                            n.error()
                        })
                    })
                }, e.prototype.getDataFromLocalDatabase = function(e) {
                    var t = this;
                    return o.Observable.create(function(n) {
                        t.localDbService.getAll(e).subscribe(function(a) {
                            if (0 != a.length) n.next(a), n.complete();
                            else {
                                var i = null;
                                switch (e) {
                                    case r.c:
                                        i = t.getDataElements();
                                        break;
                                    case r.g:
                                        i = t.getDataSets();
                                        break;
                                    case r.b:
                                        i = t.getOrganisationUnits();
                                        break;
                                    case r.h:
                                        i = t.getCategoryCombos();
                                        break;
                                    case r.d:
                                        i = t.getIndicators();
                                        break;
                                    case r.e:
                                        i = t.getIndicatorGroups();
                                        break;
                                    case r.f:
                                        i = t.getDataElementGroups();
                                        break;
                                    case r.i:
                                        i = t.getPrograms();
                                        break;
                                    default:
                                        console.error("The key passed is not recognized")
                                }
                                i.subscribe(function(a) {
                                    a.forEach(function(n) {
                                        t.localDbService.add(e, n).subscribe(function(e) {
                                            return null
                                        })
                                    }), n.next(a), n.complete()
                                }, function(e) {
                                    return n.error(e)
                                })
                            }
                        }, function(e) {
                            return n.error(e)
                        })
                    })
                }, e.prototype.addDataToLocalDatabase = function(e) {
                    var t = this;
                    return o.Observable.create(function(n) {
                        t.localDbService.getAll(e).subscribe(function(a) {
                            var i = null;
                            switch (e) {
                                case r.c:
                                    i = t.getDataElements();
                                    break;
                                case r.g:
                                    i = t.getDataSets();
                                    break;
                                case r.b:
                                    i = t.getOrganisationUnits();
                                    break;
                                case r.h:
                                    i = t.getCategoryCombos();
                                    break;
                                case r.d:
                                    i = t.getIndicators();
                                    break;
                                case r.e:
                                    i = t.getIndicatorGroups();
                                    break;
                                case r.f:
                                    i = t.getDataElementGroups();
                                    break;
                                case r.i:
                                    i = t.getPrograms();
                                    break;
                                default:
                                    console.error("The key passed is not recognized")
                            }
                            i.subscribe(function(a) {
                                a.forEach(function(n) {
                                    t.localDbService.add(e, n).subscribe(function(e) {
                                        return null
                                    }, function(e) {})
                                }), n.next(a), n.complete()
                            }, function(e) {
                                return n.error(e)
                            })
                        }, function(e) {
                            return n.error(e)
                        })
                    })
                }, e
            }();
        d = l([n.i(a.c)(), c("design:paramtypes", ["function" == typeof(p = void 0 !== s.a && s.a) && p || Object, "function" == typeof(u = void 0 !== r.a && r.a) && u || Object])], d);
        var p, u
    },
    "/kyp": function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("Fzro"),
            o = n("Gvdl"),
            r = (n.n(o), n("W3qg")),
            s = n("j8YU"),
            l = n("lRnG"),
            c = n("rPc3");
        n.d(t, "a", function() {
            return u
        });
        var d = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            p = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            u = function() {
                function e(e, t, n, a, i) {
                    this.visualizationStore = e, this.analyticsService = t, this.visualizationService = n, this.http = a, this.constant = i
                }
                return e.prototype.getSanitizedTableData = function(e, t) {
                    var n = this;
                    return o.Observable.create(function(a) {
                        var i = n.visualizationStore.find(e.id);
                        if (null != i) i.layers.forEach(function(e) {
                            e.settings.hasOwnProperty("tableConfiguration") || (e.settings.tableConfiguration = n._getTableConfiguration(e.settings, i.type))
                        }), t.length > 0 ? i.layers.forEach(function(e) {
                            n.analyticsService.getAnalytics(e.settings, i.type, t).subscribe(function(t) {
                                e.analytics = t, n.visualizationStore.createOrUpdate(i), a.next(i), a.complete()
                            }, function(e) {
                                console.warn(e)
                            })
                        }) : (n.visualizationStore.createOrUpdate(i), a.next(i), a.complete());
                        else if (e.details.hasOwnProperty("favorite")) {
                            var r = e.details.favorite.hasOwnProperty("type") ? e.details.favorite.type : null,
                                s = e.details.favorite.hasOwnProperty("id") ? e.details.favorite.id : null;
                            null != r && null != s ? n.http.get(n.constant.api + r + "s/" + s + ".json?fields=*,dataElementDimensions[dataElement[id,optionSet[id,options[id,name]]]],displayDescription,program[id,name],programStage[id,name],interpretations[*,user[id,displayName],likedBy[id,displayName],comments[lastUpdated,text,user[id,displayName]]],columns[dimension,filter,legendSet,items[id,dimensionItem,dimensionItemType,displayName]],rows[dimension,filter,legendSet,items[id,dimensionItem,dimensionItemType,displayName]],filters[dimension,filter,legendSet,items[id,dimensionItem,dimensionItemType,displayName]],access,userGroupAccesses,publicAccess,displayDescription,user[displayName,dataViewOrganisationUnits],!href,!rewindRelativePeriods,!userOrganisationUnit,!userOrganisationUnitChildren,!userOrganisationUnitGrandChildren,!externalAccess,!relativePeriods,!columnDimensions,!rowDimensions,!filterDimensions,!organisationUnitGroups,!itemOrganisationUnitGroups,!indicators,!dataElements,!dataElementOperands,!dataElementGroups,!dataSets,!periods,!organisationUnitLevels,!organisationUnits").map(function(e) {
                                return e.json()
                            }).catch(function(e) {
                                return o.Observable.throw(new Error(e))
                            }).subscribe(function(i) {
                                i.tableConfiguration = n._getTableConfiguration(i, e.type), n.analyticsService.getAnalytics(i, e.type, t).subscribe(function(t) {
                                    e.layers.push({
                                        settings: i,
                                        analytics: t
                                    }), n.visualizationStore.createOrUpdate(e), a.next(e), a.complete()
                                }, function(e) {
                                    a.error(e)
                                })
                            }, function(e) {
                                a.error(e)
                            }) : a.error("Favorite essential parameters are not supplied")
                        } else if (e.details.hasOwnProperty("externalDimensions") && 0 == e.layers.length) {
                            for (var l = [], c = 0, d = e.details.externalDimensions; c < d.length; c++) {
                                var p = d[c];
                                null == p.value && l.push(p.name)
                            }
                            if (l.length > 0) {
                                var u = "Provide values for dimensions";
                                a.error(u)
                            } else n.analyticsService.getAnalytics(e.details.externalDimensions, null, [], !0).subscribe(function(t) {
                                var i = {};
                                i.tableConfiguration = n._getTableConfiguration({}, e.type, e.details.externalLayout), e.layers = [], e.layers.push({
                                    settings: i,
                                    analytics: t
                                }), a.next(e), a.complete()
                            }, function(e) {
                                a.error(e)
                            })
                        } else e.layers.length > 0 ? (e.layers.forEach(function(t) {
                            var a = {};
                            a.tableConfiguration = n._getTableConfiguration({}, e.type, e.details.externalLayout), t.settings = a
                        }), a.next(e), a.complete()) : a.error("No favorite or external dimension supplied")
                    })
                }, e.prototype._getTableConfiguration = function(e, t, n) {
                    void 0 === n && (n = null);
                    var a = [];
                    e.hasOwnProperty("columns") ? e.columns.forEach(function(e) {
                        "dy" != e.dimension && a.push(e.dimension)
                    }) : a = null != n && n.hasOwnProperty("columns") ? n.columns : ["dx"];
                    var i = [];
                    return e.hasOwnProperty("rows") ? e.rows.forEach(function(e) {
                        "dy" != e.dimension && i.push(e.dimension)
                    }) : i = null != n && n.hasOwnProperty("rows") ? n.rows : ["pe"], {
                        showColumnTotal: !e.hasOwnProperty("colTotal") || e.colTotal,
                        showColumnSubtotal: !e.hasOwnProperty("colSubtotal") || e.colSubtotal,
                        showRowTotal: !e.hasOwnProperty("rowTotal") || e.rowTotal,
                        showRowSubtotal: !e.hasOwnProperty("rowSubtotal") || e.rowSubtotal,
                        showDimensionLabels: !e.hasOwnProperty("showDimensionLabels") || e.showDimensionLabels,
                        hideEmptyRows: !e.hasOwnProperty("hideEmptyRows") || e.hideEmptyRows,
                        showHierarchy: !e.hasOwnProperty("showHierarchy") || e.showHierarchy,
                        displayList: this._checkForEventDataType(e, t),
                        rows: i,
                        columns: a
                    }
                }, e.prototype._checkForEventDataType = function(e, t) {
                    var n = !1;
                    return "EVENT_REPORT" == t && e.hasOwnProperty("dataType") && "EVENTS" == e.dataType && (n = !0), n
                }, e.prototype.getTableObjects = function(e) {
                    var t = this,
                        n = [];
                    return e.layers.length > 0 && e.layers.forEach(function(e) {
                        e.analytics.hasOwnProperty("headers") ? n.push(t.visualizationService.drawTable(e.analytics, e.settings.tableConfiguration)) : console.warn("Analytic object is empty")
                    }), n
                }, e
            }();
        u = d([n.i(a.c)(), p("design:paramtypes", ["function" == typeof(h = void 0 !== c.a && c.a) && h || Object, "function" == typeof(g = void 0 !== l.a && l.a) && g || Object, "function" == typeof(f = void 0 !== r.a && r.a) && f || Object, "function" == typeof(m = void 0 !== i.b && i.b) && m || Object, "function" == typeof(y = void 0 !== s.a && s.a) && y || Object])], u);
        var h, g, f, m, y
    },
    0: function(e, t, n) {
        e.exports = n("x35b")
    },
    "0RIM": function(e, t, n) {
        "use strict";

        function a(e, t) {
            switch (void 0 === e && (e = s.a), t.type) {
                case l.r:
                    return i(e);
                case l.s:
                    return o(e, t);
                case l.t:
                    return r(e, t);
                default:
                    return e
            }
        }

        function i(e) {
            var t = c.cloneDeep(e);
            return t.dataAreaOpen = !t.dataAreaOpen, t.dataAreaOpen ? t.dataAreaOpenState = "active" : t.dataAreaOpenState = "inactive", t
        }

        function o(e, t) {
            var n = c.cloneDeep(e);
            return n.loadingData = t.payload.loading, n.loadingDataMessage = t.payload.message, n
        }

        function r(e, t) {
            var n = c.cloneDeep(e);
            return n.loadingData = !1, n
        }
        var s = n("4YOn"),
            l = n("PVdj"),
            c = n("M4fF");
        n.n(c);
        t.a = a
    },
    "0S4q": function(e, t) {
        e.exports = '<div *ngIf="tableObject" style="padding: 3px" [ngClass]="{\'update-needed\': needForUpdate}">\n  <h4 *ngIf="tableObject.rows.length != 0" class="text-center" style="margin-bottom: 0px">{{tableObject?.title}}\n    \x3c!--<div class="dropdown pull-right hide-on-print">--\x3e\n      \x3c!--<button class="btn btn-default btn-sm" style="margin-bottom: 10px" type="button" data-toggle="dropdown"><i class="fa fa-file-excel-o"></i> Excel--\x3e\n        \x3c!--<span class="caret"></span></button>--\x3e\n      \x3c!--<ul class="dropdown-menu">--\x3e\n        \x3c!--<li><a (click)="downloadExcel()">Merged Data</a></li>--\x3e\n      \x3c!--</ul>--\x3e\n    \x3c!--</div>--\x3e\n  </h4>\n  <table #autogrowingTable class="table table-bordered table-responsive table-condensed custom-table"\n         *ngIf="tableObject.rows.length != 0">\n    <thead>\n    \x3c!--title--\x3e\n    <tr  *ngIf="dataItems.data.items?.length != 0 && showTable && !uiState.loadingData" class="table-title">\n      <th [attr.colspan]="tableObject.rows[0].items.length">\n        <h4 style="margin: 0px" class="text-center">{{ getTitle() }} </h4>\n      </th>\n    </tr>\n    \x3c!--headers--\x3e\n    <tr *ngFor="let header of tableObject.headers; let j = index" class="header-column">\n      <th *ngIf="tableObject.hasParentOu"></th>\n      <th *ngFor="let table_column of tableObject.columns; let i = index" style="text-align: center">\n        <span *ngIf="i==tableObject.columns.length-1 && j==tableObject.headers.length-1 && tableObject.titlesAvailable">{{ tableObject.titles.rows[i] }} / {{ tableObject.titles.column[j]}}</span>\n        <span *ngIf="i != tableObject.columns.length-1">{{ tableObject.titles.rows[i] }}</span>\n        <span *ngIf="j != tableObject.headers.length-1">{{ tableObject.titles.column[j] }}</span>\n      </th>\n      <th *ngFor="let header_column of header.items; let i=index" [colSpan]="header_column.span"\n          style="text-align: center" (click)="sortData(tableObject,i+tableObject.columns.length,j+1==tableObject.headers.length)">\n        {{ header_column.name }}\n        <span *ngIf="j+1==tableObject.headers.length && current_sorting[i+tableObject.columns.length] && sort_direction[i+tableObject.columns.length] == \'asc\'" class="glyphicon glyphicon-triangle-top pull-right"></span>\n        <span *ngIf="j+1==tableObject.headers.length && current_sorting[i+tableObject.columns.length] && sort_direction[i+tableObject.columns.length] == \'desc\'" class="glyphicon glyphicon-triangle-bottom pull-right"></span>\n      </th>\n    </tr>\n    </thead>\n    <tbody  id="myPivotTable">\n    <tr *ngFor="let row of tableObject.rows" [ngClass]="{\'sub-total\': row.sub_total}">\n      <td\n        *ngFor="let header_column of row.items;let i = index"\n        [ngClass]="getClasses(header_column)"\n        style="vertical-align: middle"\n          [attr.rowspan]="header_column.row_span">\n        {{ header_column.val | thouthandSepator }}\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n\n</div>\n\n\x3c!--loading autogrowing--\x3e\n<div class="loadingAutogrowingMessage" *ngIf="loadingAutogrowing && !uiState.loadingData" >\n  <img src="assets/img/balls-5.svg" style="height: 40px; width: 40px"> Loading Auto growing data\n</div>\n\n<div *ngIf="showAutoGrowingTable">\n  <app-auto-growing *ngFor="let autogrowing of autoGrowingData"\n                    [autogrowing]="autogrowing"\n                    [dataItems]="dataItems"\n                    [layoutItems]="layoutItems"\n                    [title]="getTitle()"\n  >\n\n  </app-auto-growing>\n</div>\n'
    },
    "1HCE": function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("+Cee"),
            o = n("M4fF");
        n.n(o);
        n.d(t, "a", function() {
            return l
        });
        var r = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            s = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            l = function() {
                function e(e) {
                    this.dataService = e, this.listItems = [], this.dataGroups = [], this.dataOptions = [{
                        name: "All",
                        prefix: "ALL",
                        selected: !0
                    }, {
                        name: "ILS",
                        prefix: "ils",
                        selected: !1
                    }, {
                        name: "LAB",
                        prefix: "lab",
                        selected: !1
                    }, {
                        name: "ARV",
                        prefix: "arv",
                        selected: !1
                    }, {
                        name: "TB",
                        prefix: "tb",
                        selected: !1
                    }], this.selectedGroup = {
                        id: "ALL",
                        name: "All Data"
                    }, this.selected_data_option = new a.F, this.selected_group = new a.F, this.onDataUpdate = new a.F, this.selectedItems = [], this.querystring = null, this.listchanges = null, this.showGroups = !1, this.showBody = !1, this.metaData = {
                        dataElements: [],
                        indicators: [],
                        dataElementGroups: [],
                        indicatorGroups: [],
                        categoryOptions: [],
                        dataSets: [],
                        programs: [],
                        dataSetGroups: [{
                            id: "",
                            name: "Reporting Rate"
                        }, {
                            id: ".REPORTING_RATE_ON_TIME",
                            name: "Reporting Rate on time"
                        }, {
                            id: ".ACTUAL_REPORTS",
                            name: "Actual Reports Submitted"
                        }, {
                            id: ".ACTUAL_REPORTS_ON_TIME",
                            name: "Reports Submitted on time"
                        }, {
                            id: ".EXPECTED_REPORTS",
                            name: "Expected Reports"
                        }]
                    }, this.loading = !0, this.p = 1, this.k = 1, this.need_groups = !0, this.hideMonth = !1, this.hideQuarter = !1
                }
                return e.prototype.ngOnInit = function() {
                    var e = this;
                    this.searchOptions = {
                        shouldSort: !0,
                        tokenize: !0,
                        findAllMatches: !0,
                        threshold: 0,
                        location: 0,
                        distance: 100,
                        maxPatternLength: 32,
                        minMatchCharLength: 1,
                        keys: ["name"]
                    }, this.dataService.initiateData().subscribe(function(t) {
                        e.metaData = {
                            dataElements: t[0],
                            indicators: t[1],
                            dataElementGroups: t[3],
                            indicatorGroups: t[2],
                            categoryOptions: t[5],
                            dataSets: t[4],
                            programs: t[6],
                            dataSetGroups: [{
                                id: "",
                                name: "Reporting Rate"
                            }, {
                                id: ".REPORTING_RATE_ON_TIME",
                                name: "Reporting Rate on time"
                            }, {
                                id: ".ACTUAL_REPORTS",
                                name: "Actual Reports Submitted"
                            }, {
                                id: ".ACTUAL_REPORTS_ON_TIME",
                                name: "Reports Submitted on time"
                            }, {
                                id: ".EXPECTED_REPORTS",
                                name: "Expected Reports"
                            }]
                        }, e.loading = !1, e.dataGroups = e.groupList(), e.listItems = e.dataItemList()
                    })
                }, e.prototype.ngAfterViewInit = function() {}, e.prototype.toggleDataOption = function(e, t) {
                    t.ctrlKey ? this.dataOptions.forEach(function(t) {
                        t.prefix === e && (t.selected = !t.selected)
                    }) : this.dataOptions.forEach(function(t) {
                        t.prefix === e ? t.selected = !t.selected : t.selected = !1
                    }), this.selectedGroup = {
                        id: "ALL",
                        name: "ALL"
                    }, this.dataGroups = this.groupList(), this.selectedGroup = this.dataGroups[0], this.listItems = this.dataItemList(), this.p = 1
                }, e.prototype.setSelectedGroup = function(e, t) {
                    t.stopPropagation(), this.selectedGroup = e, this.listItems = this.dataItemList(), this.showGroups = !1, this.p = 1
                }, e.prototype.getSelectedOption = function() {
                    var e = [];
                    return this.dataOptions.forEach(function(t) {
                        t.selected && e.push(t)
                    }), o.map(e, "prefix")
                }, e.prototype.getDataItems = function() {
                    var e = this,
                        t = [];
                    return this.metaData.dataElements.forEach(function(n) {
                        t.push.apply(t, e.getDetailedDataElements(n))
                    }), {
                        dx: t,
                        ind: this.metaData.indicators,
                        dt: this.metaData.dataSets,
                        at: this.metaData.programs
                    }
                }, e.prototype.trackByFn = function(e, t) {
                    return t.id
                }, e.prototype.getDetailedDataElements = function(e) {
                    var t = [],
                        n = this.getCategoryCombo(e.categoryCombo.id);
                    return t.push({
                        id: e.id,
                        name: e.name + "",
                        dataSetElements: e.dataSetElements
                    }), n.categoryOptionCombos.forEach(function(n) {
                        "default" !== n.name && t.push({
                            id: e.id + "." + n.id,
                            name: e.name + " " + n.name,
                            dataSetElements: e.dataSetElements
                        })
                    }), t
                }, e.prototype.getCategoryCombo = function(e) {
                    var t = null;
                    return this.metaData.categoryOptions.forEach(function(n) {
                        n.id === e && (t = n)
                    }), t
                }, e.prototype.getData = function() {
                    return {
                        dx: this.metaData.dataElementGroups,
                        ind: this.metaData.indicatorGroups,
                        dt: this.metaData.dataSetGroups
                    }
                }, e.prototype.dataItemList = function() {
                    var e = [],
                        t = this.selectedGroup,
                        n = this.getSelectedOption(),
                        a = this.getDataItems();
                    if (t)
                        if ("ALL" === t.id) e.push.apply(e, a.dx);
                        else {
                            if (console.log(t), (o.includes(n, "ils") || -1 !== t.name.indexOf("ILS")) && t.hasOwnProperty("dataElements")) {
                                var i = o.filter(a.dx, function(e) {
                                    return o.includes(o.map(t.dataElements, "id"), e.id)
                                });
                                e.push.apply(e, i)
                            }
                            if ((o.includes(n, "lab") || -1 !== t.name.indexOf("LAB")) && t.hasOwnProperty("dataElements")) {
                                var i = o.filter(a.dx, function(e) {
                                    return o.includes(o.map(t.dataElements, "id"), e.id)
                                });
                                e.push.apply(e, i)
                            }
                            if ((o.includes(n, "arv") || -1 !== t.name.indexOf("ARV")) && t.hasOwnProperty("dataElements")) {
                                var i = o.filter(a.dx, function(e) {
                                    return o.includes(o.map(t.dataElements, "id"), e.id)
                                });
                                e.push.apply(e, i)
                            }
                            if ((o.includes(n, "tb") || -1 !== t.name.indexOf("TB")) && t.hasOwnProperty("dataElements")) {
                                var i = o.filter(a.dx, function(e) {
                                    return o.includes(o.map(t.dataElements, "id"), e.id)
                                });
                                e.push.apply(e, i)
                            }
                        }
                    return e
                }, e.prototype.groupList = function() {
                    this.need_groups = !0;
                    var e = [],
                        t = this.getSelectedOption(),
                        n = this.getData();
                    if (o.includes(t, "ALL") && e.push.apply(e, [{
                            id: "ALL",
                            name: "ALL"
                        }].concat(n.dx)), o.includes(t, "ils")) {
                        var a = o.filter(n.dx, function(e) {
                            return -1 !== e.name.indexOf("ILS")
                        });
                        e.push.apply(e, a)
                    }
                    if (o.includes(t, "lab")) {
                        var i = o.filter(n.dx, function(e) {
                            return -1 !== e.name.indexOf("LAB")
                        });
                        e.push.apply(e, i)
                    }
                    if (o.includes(t, "arv")) {
                        var r = o.filter(n.dx, function(e) {
                            return -1 !== e.name.indexOf("ARV")
                        });
                        e.push.apply(e, r)
                    }
                    if (o.includes(t, "tb")) {
                        var s = o.filter(n.dx, function(e) {
                            return -1 !== e.name.indexOf("TB")
                        });
                        e.push.apply(e, s)
                    }
                    return e
                }, e.prototype.addSelected = function(e, t) {
                    t.stopPropagation(), this.selectedItems.push(e), this.getSelectedPeriods(), this.onDataUpdate.emit({
                        itemList: this.selectedItems,
                        auto_growing: this.getAutogrowingTables(this.selectedItems),
                        selectedData: {
                            name: "dx",
                            value: this.getDataForAnalytics(this.selectedItems)
                        },
                        hideQuarter: this.hideQuarter,
                        hideMonth: this.hideMonth
                    })
                }, e.prototype.getAutogrowingTables = function(e) {
                    var t = [];
                    return e.forEach(function(e) {
                        e.hasOwnProperty("programType") && t.push(e)
                    }), t
                }, e.prototype.gettables = function(e) {
                    var t = [];
                    return e.forEach(function(e) {
                        e.hasOwnProperty("programType") || t.push(e)
                    }), t
                }, e.prototype.removeSelected = function(e, t) {
                    t.stopPropagation(), this.selectedItems.splice(this.selectedItems.indexOf(e), 1), this.getSelectedPeriods(), this.onDataUpdate.emit({
                        itemList: this.selectedItems,
                        auto_growing: this.getAutogrowingTables(this.selectedItems),
                        selectedData: {
                            name: "dx",
                            value: this.getDataForAnalytics(this.selectedItems)
                        },
                        hideQuarter: this.hideQuarter,
                        hideMonth: this.hideMonth
                    })
                }, e.prototype.selectAllItems = function(e) {
                    var t = this;
                    e.stopPropagation(), this.listItems.forEach(function(e) {
                        t.checkDataAvailabilty(e, t.selectedItems) || t.selectedItems.push(e)
                    }), this.onDataUpdate.emit({
                        itemList: this.selectedItems,
                        auto_growing: this.getAutogrowingTables(this.selectedItems),
                        selectedData: {
                            name: "dx",
                            value: this.getDataForAnalytics(this.selectedItems)
                        },
                        hideQuarter: this.hideQuarter,
                        hideMonth: this.hideMonth
                    })
                }, e.prototype.deselectAllItems = function(e) {
                    e.stopPropagation(), this.selectedItems = [], this.onDataUpdate.emit({
                        itemList: this.selectedItems,
                        auto_growing: this.getAutogrowingTables(this.selectedItems),
                        selectedData: {
                            name: "dx",
                            value: this.getDataForAnalytics(this.selectedItems)
                        },
                        hideQuarter: this.hideQuarter,
                        hideMonth: this.hideMonth
                    })
                }, e.prototype.inSelected = function(e, t) {
                    for (var n = !1, a = 0, i = t; a < i.length; a++) {
                        i[a].id === e.id && (n = !0)
                    }
                    return n
                }, e.prototype.transferDataSuccess = function(e, t) {
                    if (e.dragData.id === t.id) console.log("Droping in the same area");
                    else {
                        var n = this.getDataPosition(e.dragData.id) > this.getDataPosition(t.id) ? 0 : 1;
                        this.deleteData(e.dragData), this.insertData(e.dragData, t, n), this.onDataUpdate.emit({
                            itemList: this.selectedItems,
                            auto_growing: this.getAutogrowingTables(this.selectedItems),
                            selectedData: {
                                name: "dx",
                                value: this.getDataForAnalytics(this.selectedItems)
                            },
                            hideQuarter: this.hideQuarter,
                            hideMonth: this.hideMonth
                        })
                    }
                }, e.prototype.getDataPosition = function(e) {
                    var t = null;
                    return this.selectedItems.forEach(function(n, a) {
                        n.id === e && (t = a)
                    }), t
                }, e.prototype.deleteData = function(e) {
                    var t = this;
                    this.selectedItems.forEach(function(n, a) {
                        e.id === n.id && t.selectedItems.splice(a, 1)
                    })
                }, e.prototype.insertData = function(e, t, n) {
                    var a = this;
                    this.selectedItems.forEach(function(i, o) {
                        t.id !== i.id || a.checkDataAvailabilty(e, a.selectedItems) || a.selectedItems.splice(o + n, 0, e)
                    })
                }, e.prototype.checkDataAvailabilty = function(e, t) {
                    for (var n = !1, a = 0, i = t; a < i.length; a++) {
                        i[a].id === e.id && (n = !0)
                    }
                    return n
                }, e.prototype.getSelectedPeriods = function() {
                    for (var e = [], t = 0, n = this.selectedItems; t < n.length; t++) {
                        var a = n[t];
                        if (a.hasOwnProperty("dataSets"))
                            for (var i = 0, o = a.dataSets; i < o.length; i++) {
                                var r = o[i]; - 1 === e.indexOf(r.periodType) && e.push(r.periodType)
                            }
                        if (a.hasOwnProperty("dataSetElements"))
                            for (var s = 0, l = a.dataSetElements; s < l.length; s++) {
                                var r = l[s]; - 1 === e.indexOf(r.dataSet.periodType) && e.push(r.dataSet.periodType)
                            }
                    }
                    this.selectedItems.length > 0 && (-1 !== e.indexOf("Monthly") || -1 === e.indexOf("Quarterly") && -1 === e.indexOf("FinancialJuly") ? this.hideMonth = !1 : this.hideMonth = !0, -1 === e.indexOf("Monthly") && -1 === e.indexOf("Quarterly") && -1 !== e.indexOf("FinancialJuly") ? (this.hideMonth = !0, this.hideQuarter = !0) : this.hideQuarter = !1, -1 !== e.indexOf("Quarterly") && (this.hideQuarter = !1))
                }, e.prototype.getDataForAnalytics = function(e) {
                    var t = "";
                    return e.forEach(function(e, n) {
                        e.hasOwnProperty("programType") || (t += 0 === n ? e.id : ";" + e.id)
                    }), t
                }, e.prototype.toggleGroups = function(e) {
                    e.stopPropagation(), this.showGroups = !this.showGroups
                }, e
            }();
        r([n.i(a._2)(), s("design:type", "function" == typeof(c = void 0 !== a.F && a.F) && c || Object)], l.prototype, "selected_data_option", void 0), r([n.i(a._2)(), s("design:type", "function" == typeof(d = void 0 !== a.F && a.F) && d || Object)], l.prototype, "selected_group", void 0), r([n.i(a._2)(), s("design:type", "function" == typeof(p = void 0 !== a.F && a.F) && p || Object)], l.prototype, "onDataUpdate", void 0), r([n.i(a.O)(), s("design:type", Array)], l.prototype, "selectedItems", void 0), l = r([n.i(a._3)({
            selector: "app-data-filter",
            template: n("9w+2"),
            styles: [n("ycJ1")]
        }), s("design:paramtypes", ["function" == typeof(u = void 0 !== i.a && i.a) && u || Object])], l);
        var c, d, p, u
    },
    "1LY7": function(e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, ".options-block{position:absolute;border-left:1px solid #ececec;border-right:1px solid #ececec;top:20px;bottom:0;right:10px;height:95%;border-style:none}.options-block,.options-block ul>li>a{transition:all .2s ease-in-out;width:40px;background-color:transparent}.options-block ul>li>a{cursor:pointer;margin-left:4px;margin-top:5px;padding-left:5px;padding-top:5px;font-size:20px;height:40px;border:1px solid #ddd;border-radius:20px;margin-bottom:5px}.options-block ul>li>a:hover{-webkit-transform:scale(1.2);transform:scale(1.2);background-color:#e0ecfc}.chart-option-icon{height:27px}.active-type{background-color:#e0ecfc!important}", ""]), e.exports = e.exports.toString()
    },
    "1S38": function(e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, ".drop-target{height:100px}.draggable{border:1px solid #d3d3d3;padding:3px}.layout-btn{display:block;height:29px;padding-top:3px;padding-left:5px;padding-right:5px}.layout-btn:hover{background-color:#ececec}.layout-block{position:absolute;border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175);background-color:#fff;border:1px solid rgba(0,0,0,.15);max-height:360px;overflow:hidden;min-width:510px;width:510px;z-index:1000;padding-bottom:5px}.dimension-drops{height:125px;width:150px}.dnd-drag-enter{opacity:.7;border:1px dotted #204d74}.dnd-drag-over{border:0 dotted #204d74}.dnd-sortable-drag{-webkit-transform:scale(.9);transform:scale(.9);opacity:.7;border:2px dashed #000}.dropdownField{position:absolute;margin-top:2px;padding-top:10px;border:1px solid rgba(0,0,0,.3);width:400px;z-index:100;background-color:#f5f5f5}.layout-toggle-btn{transition:all .2s ease-in-out;margin-top:2px;border-radius:20px}.layout-toggle-btn:hover{-webkit-transform:scale(1.1);transform:scale(1.1);background-color:#e0ecfc}", ""]), e.exports = e.exports.toString()
    },
    "1qAp": function(e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, ".show{display:block}.hide{display:none}.header-column{background-color:#dae6f8}.table-title{background-color:#c7d5e9}.nopadding{padding:0!important;margin:0!important}.right{text-align:right}", ""]), e.exports = e.exports.toString()
    },
    "4Wgh": function(e, t) {},
    "4YOn": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
            loadingOrganisationUnit: !1,
            loadingData: !1,
            loadingDataMessage: "",
            loadingDataElements: !1,
            layoutOpened: !1,
            dataAreaOpen: !0,
            dataAreaOpenState: "inactive"
        }
    },
    "4dEB": function(e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, ".drop-target{height:100px}.fav-name{cursor:pointer}.fav-name:hover{text-decoration:underline}.form-edit{display:block;width:70%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.draggable{border:1px solid #d3d3d3;padding:3px}.fav-list{font-size:11px}.fav-list:hover{background-color:rgba(0,0,0,.1)}.butn{padding:4px}.butn:hover{background-color:rgba(0,0,0,.2);padding:4px;border-radius:3px}.layout-btn{display:block;height:29px;padding-top:3px;padding-left:5px;padding-right:5px}.layout-btn:hover{background-color:#ececec}.layout-block{position:absolute;border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175);background-color:#fff;border:1px solid rgba(0,0,0,.15);max-height:360px;overflow:hidden;min-width:510px;width:510px;z-index:1000;padding-bottom:5px;margin-top:2px}.dimension-drops{height:125px;width:150px}.dnd-drag-enter{opacity:.7;border:1px dotted #204d74}.dnd-drag-over{border:0 dotted #204d74}.dnd-sortable-drag{-webkit-transform:scale(.9);transform:scale(.9);opacity:.7;border:2px dashed #000}", ""]), e.exports = e.exports.toString()
    },
    "5xMp": function(e, t) {
        e.exports = '<div class="container-fluid" style="border: 1px solid rgba(0,0,0,0.2); padding-left: 3px;padding-right: 3px">\n    \x3c!--<div class="left-block col-xs-4 hide-on-print" [@heroState]="uiState.dataAreaOpenState" >--\x3e\n      \x3c!--<nav class="navbar navbar-default top-bar" style="margin-bottom: 5px">--\x3e\n        \x3c!--<div class="container-fluid" style="padding-left: 3px;padding-right: 3px">--\x3e\n          \x3c!--<div class="col-sm-10" style="padding: 0px">--\x3e\n              \x3c!--<h4>ELMIS Analytics</h4>--\x3e\n          \x3c!--</div>--\x3e\n          \x3c!--<div class="col-sm-2" style="padding: 0px">--\x3e\n            \x3c!--<a (click)="toogleDataArea()" class="pull-right close-right-area" title="Close data selection area" style="cursor: pointer;font-weight: bold">--\x3e\n              \x3c!--<i class="fa fa-angle-double-left" style="margin-top: 5px;font-size: 23px;color: rgba(0,0,0,0.5);"></i>--\x3e\n            \x3c!--</a>--\x3e\n          \x3c!--</div>--\x3e\n\n        \x3c!--</div>--\x3e\n      \x3c!--</nav>--\x3e\n      \x3c!--<div class="container-fluid" style="padding-left: 0px; padding-right: 0px">--\x3e\n        \x3c!--<div class="col-sm-12" style="padding: 0px">--\x3e\n          \x3c!--&lt;!&ndash;data&ndash;&gt;--\x3e\n          \x3c!--<div class="panel panel-default data-component-area">--\x3e\n            \x3c!--<div class="panel-body" style="padding: 3px">--\x3e\n              \x3c!--<app-data-filter--\x3e\n                \x3c!--#datafilter--\x3e\n                \x3c!--*ngIf="uiState.dataAreaOpen"--\x3e\n                \x3c!--(onDataUpdate)="setSelectedData($event)"--\x3e\n                \x3c!--[selectedItems]="selectedData$ | async"--\x3e\n              \x3c!--&gt;</app-data-filter>--\x3e\n            \x3c!--</div>--\x3e\n          \x3c!--</div>--\x3e\n        \x3c!--</div>--\x3e\n      \x3c!--</div>--\x3e\n    \x3c!--</div>--\x3e\n\n    <div class="right-block col-md-12" >\n      <nav class="navbar navbar-default top-bar hide-on-print">\n        <div class="container-fluid" style="padding-top: 4px;padding-left: 3px;padding-right: 3px">\n          <div class="navbar-header">\n            \x3c!--<a (click)="toogleDataArea()" class="pull-left filter-btn" title="open filters" style="margin-right:8px;cursor: pointer;font-weight: bold">--\x3e\n              \x3c!--<img [src]="\'assets/img/filter.png\'" alt="">--\x3e\n            \x3c!--</a>--\x3e\n            \x3c!--data--\x3e\n            <div *ngIf="uiState.dataAreaOpen" style="float: left;padding-left: 3px" appClickOutside (clickOutside)="showDx = false" >\n              <a class="btn btn-default filter-dimensions-btn" (click)="showDx = !showDx" title="Click Data to select Dataelement, computed value, auto-growing and submissions">\n                \x3c!--<img src="assets/img/data.png" height="15"/>--\x3e\n                Data\n              </a>\n              <div [ngClass]="{\'hideData\': !showDx}" class="dropdownField">\n                <app-data-filter\n                  (onDataUpdate)="setSelectedData($event)"\n                  [selectedItems]="selectedData$ | async"\n                ></app-data-filter>\n              </div>\n            </div>\n            \x3c!--period--\x3e\n            <div style="float: left;padding-left: 3px" *ngIf="uiState.dataAreaOpen" appClickOutside (clickOutside)="showPe = false">\n              <a class="btn btn-default filter-dimensions-btn" (click)="showPe = !showPe" title="Click Period to select Months,Quarters or Financial years of interest">\n                \x3c!--<img src="assets/img/period.png" height="15"/>--\x3e\n                Period\n              </a>\n              <div *ngIf="showPe" class="dropdownField">\n                <div app-period-filter #periodComponent1\n                     [hideMonth]="hideMonth"\n                     [hideQuarter]="hideQuarter"\n                     (onPeriodUpdate)="setSelectedPeriod($event)"\n                     [selected_periods]="selectedPeriod$ | async"\n                     [period_type]="selectedPeriodType$ | async"\n                ></div>\n              </div>\n            </div>\n            \x3c!--organisation units--\x3e\n            <div style="float: left;padding-left: 3px;padding-right: 3px" *ngIf="uiState.dataAreaOpen" appClickOutside (clickOutside)="showOu = false">\n              <a class="btn btn-default filter-dimensions-btn" (click)="showOu = !showOu" title="Click Admin.units to select one or more administrative units, including by levels and groups">\n                \x3c!--<img src="assets/img/tree.png" height="15"/>--\x3e\n                Admin.units\n              </a>\n              <div [ngClass]="{\'hideData\': !showOu}" class="dropdownField">\n                <div app-org-unit-filter\n                     (onOrgUnitUpdate)="setSelectedOrgunit($event)"\n                     (onOrgUnitModelUpdate)="setOrgunitModel($event)"\n                ></div>\n              </div>\n            </div>\n            \x3c!--layout option--\x3e\n            <app-layout\n              [layout]="currentLayout"\n              *ngIf="uiState.dataAreaOpen"\n              (onLayoutUpdate)="setLayout($event)"\n            ></app-layout>\n\n            \x3c!--&lt;!&ndash;options components&ndash;&gt;--\x3e\n            \x3c!--<app-options--\x3e\n              \x3c!--*ngIf="!uiState.dataAreaOpen"--\x3e\n              \x3c!--(onOptionUpdate)="updateOptions($event)"--\x3e\n              \x3c!--[currentVisualization]="currentVisualization"--\x3e\n            \x3c!--&gt;</app-options>--\x3e\n\n            \x3c!--update button--\x3e\n            <a class="btn btn-default filter-dimensions-btn" *ngIf="uiState.dataAreaOpen" (click)="updateTable()">\n              \x3c!--<img src="assets/img/update.png" height="15"/>--\x3e\n              Update\n            </a>\n\n            \x3c!--favorites--\x3e\n            \x3c!--<app-favorite--\x3e\n              \x3c!--[dataDimensions]="dataDimensions$ | async"--\x3e\n              \x3c!--[layout]="layout" [options]="options"--\x3e\n              \x3c!--[allDimensionAvailable]="allDimensionAvailable"--\x3e\n              \x3c!--(onFavoriteSelect)="openFavorite($event)"--\x3e\n            \x3c!--&gt;</app-favorite>--\x3e\n            <div class="visualization-btn-holder">\n              <ul class="nav nav-pills pull-left visualization-footer-nav">\n                <li>\n                  <a\n                    class="btn btn-sm btn-default"\n                    (click)="setVisualizationType(\'TABLE\')"\n                    [ngClass]="{\n                \'active-visualization-filter\': currentVisualization === \'TABLE\'\n                }"\n                  >\n                    <img [src]="\'assets/img/table.png\'" alt="">\n                  </a>\n                </li>\n                <li>\n                  <a\n                    class="btn btn-sm btn-default"\n                    (click)="setVisualizationType(\'CHART\')"\n                    [ngClass]="{\n                \'active-visualization-filter\': currentVisualization === \'CHART\'\n                }"\n                  >\n                    <img [src]="\'assets/img/column.png\'" alt="">\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </nav>\n      <div class="container-fluid">\n        <div class="row">\n          <div class="col-md-12">\n            <div class="loadingMessage" *ngIf="uiState.loadingData" >\n              <img src="assets/img/balls-5.svg" style="height: 40px; width: 40px">\n              {{ uiState.loadingDataMessage }} - {{ loadedData }}/{{ totalDataRequired }}({{loadedData/totalDataRequired | percent }})\n            </div>\n            <p *ngIf="!allDimensionAvailable && showTable"> Please make sure you have selected at least data, period, and Admin Unit</p>\n            <div class="col-md-12 text-center" *ngIf="showWelcomingMessage" style="margin-top: 50px;">\n              <h1>Welcome to ELMIS Analysis screen</h1>\n              <ul class="list-unstyled center-justified">\n                <li>\n                  <div class="row">\n                    <div class="col-md-1 col-xs-2"><i class="fa fa-arrow-right"></i></div>\n                    <div class="col-md-11 col-xs-10">\n                      <h5 style="margin-top: 2px; font-size: 17px;">\n                        Select Data, Period and Administrative unit(s) from the top left menu\n                      </h5>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <div class="row">\n                    <div class="col-md-1 col-xs-2"><i class="fa fa-arrow-right"></i></div>\n                    <div class="col-md-11 col-xs-10">\n                      <h5 style="margin-top: 2px; font-size: 17px;">\n                        Click layout to arrange your dimensions to different arrangements (layouts)\n                      </h5>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <div class="row">\n                    <div class="col-md-1 col-xs-2"><i class="fa fa-arrow-right"></i></div>\n                    <div class="col-md-11 col-xs-10">\n                      <h5 style="margin-top: 2px; font-size: 17px;">\n                        Click Update to create your visualization based on your preferred selections\n                      </h5>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <div class="row">\n                    <div class="col-md-1 col-xs-2"><i class="fa fa-arrow-right"></i></div>\n                    <div class="col-md-11 col-xs-10">\n                      <h5 style="margin-top: 2px; font-size: 17px;">\n                        Switch between different visualizations by just clicking button for your preferred visualization on the bottom left menu\n                      </h5>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n            <small *ngIf="needForUpdate && showTable && allDimensionAvailable">There are a changes in selections hit update to see the latest changes.\n              <button class="btn btn-default btn-xs" (click)="needForUpdate = false">Hide</button>\n              <button class="btn btn-default btn-xs" (click)="updateTable()">Update</button>\n              \x3c!--<button class="btn btn-default btn-xs" (click)="update()">Update</button>--\x3e\n            </small>\n          </div>\n        </div>\n      </div>\n      <div class="container-fluid" style="padding: 0px">\n        <div class="col-md-12" style="padding: 0px">\n          <data-area\n            *ngIf="currentVisualization === \'TABLE\'"\n            [showTable]="showTable"\n            [showAutoGrowingTable]="showAutoGrowingTable"\n            [tableObject]="tableObject"\n            [dataItems] = "dataDimensions$ | async"\n            [autoGrowingData]="autoGrowingData"\n            [layoutItems] = "layout"\n            [uiState]="uiState"\n            [loadingAutogrowing]="loadingAutogrowing"\n            [needForUpdate]="needForUpdate"\n            [allDimensionAvailable]="allDimensionAvailable"\n            [loadingParcent] = "{loadedData:loadedData,totalDataRequired:totalDataRequired,errorInNormalDataOccur:errorInNormalDataOccur,errorInNormalData:errorInNormalData}"\n            (onTableUpdate)="updateTable()"\n          ></data-area>\n          <app-chart-area\n            *ngIf="currentVisualization === \'CHART\' && showTable"\n            [chartObject]="chartObject"\n            [dataItems] = "dataDimensions$ | async"\n            [layoutItems] = "layout"\n            (onChartTypeChange)="updateChartObjectWithNewType($event)"\n          ></app-chart-area>\n        </div>\n      </div>\n    </div>\n</div>\n\n'
    },
    "7shM": function(e, t) {
        e.exports = '<div [ngClass]="{\'show\':!show,\'hide\':show}" style="text-align: center;">\n  <img src="assets/img/balls-5.svg"/>\n  Merging Autogrowing {{loadingPercent}}%\n</div>\n<div *ngIf="$scope.data" class="col-sm-12 nopadding">\n  <div class="dropdown pull-right">\n  <button class="btn btn-default btn-sm" style="margin-bottom: 10px" type="button" data-toggle="dropdown"><i class="fa fa-file-excel-o"></i> Excel\n    <span class="caret"></span></button>\n  <ul class="dropdown-menu">\n    <li><a (click)="downloadExcel(\'autogrowingTable\')">Merged Data</a></li>\n    <li><a (click)="downloadExcel(\'autogrowingRawTable\')">Raw Data</a></li>\n  </ul>\n</div>\n\n\n</div>\n<div *ngIf="$scope.data">\n  <table #autogrowingRawTable class="table hide"\n         *ngIf="$scope.data.dataElements.length != 0">\n    <thead>\n    <tr class="table-title">\n      <th  [colSpan]="$scope.data.dataElements.length">\n        <h4 class="text-center" style="margin: 0px">\n          {{autogrowing.analytics.metaData.names[$scope.config.programId]}}\n        </h4>\n      </th>\n    </tr>\n    <tr class="table-title">\n      <th  [colSpan]="$scope.data.dataElements.length">\n        <h4 class="text-center" style="margin: 0px">\n        <span *ngFor="let ou of autogrowing.analytics.metaData.ou; let i = index">\n          <span *ngIf="autogrowing.analytics.metaData.names[ou]"><span *ngIf="i > 0">,</span>{{autogrowing.analytics.metaData.names[ou]}}</span>\n        </span>\n       <span *ngIf="autogrowing.analytics.metaData.pe.length > 0">\n         <span *ngFor="let pe of autogrowing.analytics.metaData.pe; let i = index">\n           <span *ngIf="autogrowing.analytics.metaData.names[pe]">,{{autogrowing.analytics.metaData.names[pe]}}</span>\n         </span>\n       </span>\n        </h4>\n      </th>\n    <tr class="header-column">\n      <th *ngFor="let dataElement of $scope.data.dataElements"\n          style="text-align: center">\n        {{ dataElement.name }}\n      </th>\n    </tr>\n    </thead>\n    <tbody *ngIf="!$scope.config.groupBy">\n    <tr *ngFor="let event of $scope.data.events">\n      <td *ngFor="let dataElement of $scope.data.dataElements">{{event[dataElement.name]}}</td>\n    </tr>\n    </tbody>\n    <tbody *ngIf="$scope.config.groupBy">\n    <tr *ngFor="let event of $scope.data.events">\n      <ng-template ngFor let-dataElement [ngForOf]="$scope.data.dataElements" let-i="index">\n        <td [ngClass]="{\'hide-text\':checkHide(index)}" style="border:1px solid lightgrey"\n            *ngIf="event[dataElement.name] != undefined && dataElement.valueType != \'NA\'">{{event[dataElement.name] |\n          removeNaN:dataElement}}\n        </td>\n      </ng-template>\n      <td *ngIf="$scope.config.na">N/A</td>\n      <td *ngIf="$scope.config.na">N/A</td>\n    </tr>\n    </tbody>\n  </table>\n  <table #autogrowingTable [ngClass]="{\'show\':show,\'hide\':!show || error}" class="table"\n         *ngIf="$scope.data.dataElements.length != 0">\n    <thead>\n    <tr class="table-title">\n      <th  [colSpan]="$scope.data.dataElements.length">\n        <h4 class="text-center" style="margin: 0px">\n          {{autogrowing.analytics.metaData.names[$scope.config.programId]}}\n        </h4>\n      </th>\n    </tr>\n    <tr class="table-title">\n      <th  [colSpan]="$scope.data.dataElements.length">\n        <h4 class="text-center" style="margin: 0px">\n        <span *ngFor="let ou of autogrowing.analytics.metaData.ou; let i = index">\n          <span *ngIf="autogrowing.analytics.metaData.names[ou]"><span *ngIf="i > 0">,</span>{{autogrowing.analytics.metaData.names[ou]}}</span>\n        </span>\n       <span *ngIf="autogrowing.analytics.metaData.pe.length > 0">\n         <span *ngFor="let pe of autogrowing.analytics.metaData.pe; let i = index">\n           <span *ngIf="autogrowing.analytics.metaData.names[pe]">,{{autogrowing.analytics.metaData.names[pe]}}</span>\n         </span>\n       </span>\n        </h4>\n      </th>\n    <tr class="header-column">\n      <th *ngFor="let dataElement of $scope.data.dataElements"\n          style="text-align: center">\n        {{ dataElement.formName || dataElement.shortName }}\n      </th>\n    </tr>\n    </thead>\n    <tbody *ngIf="!$scope.config.groupBy" #tbody>\n    <tr *ngFor="let event of $scope.data.events">\n      <td *ngFor="let dataElement of $scope.data.dataElements">{{event[dataElement.name]}}</td>\n    </tr>\n    </tbody>\n    <tbody *ngIf="$scope.config.groupBy" #tbody style="background-color: white;">\n    <tr *ngFor="let event of $scope.data.events">\n      <ng-template ngFor let-dataElement [ngForOf]="$scope.data.dataElements" let-i="index">\n        <td [ngClass]="{\'hide-text\':checkHide(index),\'right\':[\'TEXT\',\'DATE\'].indexOf(dataElement.valuaType) == -1}" style="border:1px solid lightgrey"\n            *ngIf="event[dataElement.name] != undefined && dataElement.valueType != \'NA\'">{{event[dataElement.name] |\n          removeNaN:dataElement}}\n        </td>\n      </ng-template>\n      <td *ngIf="$scope.config.na">N/A</td>\n      <td *ngIf="$scope.config.na">N/A</td>\n    </tr>\n    </tbody>\n  </table>\n  <div *ngIf="error" class="alert alert-danger">\n    <strong>Merging Error!</strong> Error merging autogrowing for {{autogrowing.analytics.metaData.names[$scope.config.programId]}}\n    <span *ngFor="let ou of autogrowing.analytics.metaData.ou; let i = index">\n          <span *ngIf="autogrowing.analytics.metaData.names[ou]"><span *ngIf="i > 0">,</span>{{autogrowing.analytics.metaData.names[ou]}}</span>\n        </span>\n       <span *ngIf="autogrowing.analytics.metaData.pe.length > 0">\n         <span *ngFor="let pe of autogrowing.analytics.metaData.pe; let i = index">\n           <span *ngIf="autogrowing.analytics.metaData.names[pe]">,{{autogrowing.analytics.metaData.names[pe]}}</span>\n         </span>\n       </span>\n  </div>\n</div>\n'
    },
    "9GTs": function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("Xajo");
        n.n(i);
        n.d(t, "a", function() {
            return s
        });
        var o = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            r = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            s = function() {
                function e() {
                    this.layout = {
                        rows: ["pe"],
                        columns: ["dx"],
                        filters: ["ou"],
                        excluded: []
                    }, this.onLayoutUpdate = new a.F, this.showLayout = !1, this.isOpen = !1, this.names = {
                        dx: "Data",
                        ou: "Organisation Unit",
                        pe: "Period"
                    }, this.icons = {
                        dx: "glyphicon glyphicon-oil",
                        ou: "glyphicon glyphicon-home",
                        pe: "glyphicon glyphicon-calendar"
                    }, this.dimensions = {
                        filterDimension: [],
                        columnDimension: [],
                        rowDimension: []
                    }, this.drop = new a.F
                }
                return e.prototype.ngOnInit = function() {
                    this.changeVisualisation(this.visualizationType)
                }, e.prototype.onDrop = function(e, t) {
                    n.i(i.isArray)(this.layout[e.dragData.dimension]) && this.layout[e.dragData.dimension].splice(this.layout[e.dragData.dimension].indexOf(e.dragData.data), 1), "category" == t || "series" == t ? ("" != this.layout[t] && (n.i(i.isArray)(this.layout[e.dragData.dimension]) ? this.layout[e.dragData.dimension].push(this.layout[t]) : this.layout[e.dragData.dimension] = this.layout[t]), this.layout[t] = e.dragData.data) : ("category" != e.dragData.dimension && "series" != e.dragData.dimension || (this.layout[e.dragData.dimension] = ""), this.layout[t].push(e.dragData.data))
                }, e.prototype.changeVisualisation = function(e, t) {
                    void 0 === t && (t = []), this.layoutType = "CHART" == e || "EVENT_CHART" == e ? "chart" : "table"
                }, e.prototype.updateDimension = function(e) {
                    var t = this;
                    this.dimensions = {
                        filterDimension: [],
                        columnDimension: [],
                        rowDimension: []
                    }, e.forEach(function(e, n) {
                        "value" != e.name && (0 == t.dimensions.columnDimension.length ? t.dimensions.columnDimension.push(e.name) : 0 == t.dimensions.rowDimension.length ? t.dimensions.rowDimension.push(e.name) : t.dimensions.filterDimension.push(e.name), t.names[e.name] = {
                            name: e.column,
                            icon: "fa-database"
                        }, t.icons[e.name] && (t.names[e.name].icon = t.icons[e.name]))
                    })
                }, e.prototype.updateLayout = function() {
                    this.showLayout = !1, this.onLayoutUpdate.emit(this.layout)
                }, e
            }();
        o([n.i(a.O)(), r("design:type", Object)], s.prototype, "layout", void 0), o([n.i(a.O)(), r("design:type", String)], s.prototype, "visualizationType", void 0), o([n.i(a._2)(), r("design:type", Object)], s.prototype, "onLayoutUpdate", void 0), o([n.i(a._2)("drop"), r("design:type", Object)], s.prototype, "drop", void 0), s = o([n.i(a._3)({
            selector: "app-layout",
            template: n("d6xq"),
            styles: [n("1S38")]
        }), r("design:paramtypes", [])], s)
    },
    "9ien": function(e, t, n) {
        "use strict";

        function a(e, t) {
            switch (t.type) {
                case d.a:
                    return i(e, t, "with_data");
                case d.b:
                    return o(e, t);
                case d.c:
                    return r(e, t);
                case d.d:
                    return l(e, t);
                case d.e:
                    var n = c.cloneDeep(e);
                    return n.selectedData = t.payload, n.selectedDataItems = t.payload.itemList, n;
                case d.f:
                    var a = c.cloneDeep(e);
                    return a.currentAnalyticsParams = t.payload, a;
                case d.g:
                    var s = c.cloneDeep(e);
                    return s.selectedPeriod = t.payload, s;
                case d.h:
                    var p = c.cloneDeep(e);
                    return p.layout = t.payload, p;
                case d.i:
                    var u = c.cloneDeep(e);
                    return u.orgunit_model = t.payload, u;
                case d.j:
                    var h = c.cloneDeep(e);
                    return h.selectedPeriodType = t.payload, h;
                case d.k:
                    var g = c.cloneDeep(e);
                    return g.selectedYear = t.payload, g;
                case d.l:
                    var f = c.cloneDeep(e);
                    return f.mapping = t.payload, f;
                case d.m:
                    var m = c.cloneDeep(e);
                    return m.functions = t.payload, m;
                case d.n:
                    var y = c.cloneDeep(e);
                    return y.tableObject.push(t.payload), y;
                case d.o:
                    var v = c.cloneDeep(e);
                    return v.options = t.payload, v;
                case d.p:
                    var b = c.cloneDeep(e);
                    return b.tableObject = [], b;
                case d.q:
                    var _ = c.cloneDeep(e);
                    return _.selectedOrgUnits = t.payload, _;
                default:
                    return e
            }
        }

        function i(e, t, n) {
            var a = c.cloneDeep(e);
            return "empty" === n ? a.currentEmptyAnalytics = t.payload : a.currentAnalytics = t.payload, a
        }

        function o(e, t) {
            var n = c.cloneDeep(e),
                a = s(n.dataAnalytics, t.payload.dataId),
                i = !0;
            return a.checker && (n.dataAnalytics[a.index].lastOu === n.selectedOrgUnits.value && n.dataAnalytics[a.index].lastPe === n.selectedPeriod.value ? i = !1 : (i = !0, n.dataAnalytics.splice(a.index, 1))), t.payload.analytics.headers = [{
                name: "dx",
                column: "Data",
                valueType: "TEXT",
                type: "java.lang.String",
                hidden: !1,
                meta: !0
            }, {
                name: "pe",
                column: "Period",
                valueType: "TEXT",
                type: "java.lang.String",
                hidden: !1,
                meta: !0
            }, {
                name: "ou",
                column: "Organisation unit",
                valueType: "TEXT",
                type: "java.lang.String",
                hidden: !1,
                meta: !0
            }, {
                name: "value",
                column: "Value",
                valueType: "NUMBER",
                type: "java.lang.Double",
                hidden: !1,
                meta: !1
            }], i && n.dataAnalytics.push({
                id: t.payload.dataId,
                analytics: t.payload.analytics,
                lastOu: n.selectedOrgUnits.value,
                lastPe: n.selectedPeriod.value
            }), n
        }

        function r(e, t) {
            var n = c.cloneDeep(e),
                a = s(n.autoGrowingAnalytics, t.payload.dataId),
                i = !0;
            return a.checker && (n.autoGrowingAnalytics[a.index].lastOu === n.selectedOrgUnits.value && n.autoGrowingAnalytics[a.index].lastPe === n.selectedPeriod.value ? i = !1 : (i = !0, n.autoGrowingAnalytics.splice(a.index, 1))), i && n.autoGrowingAnalytics.push({
                id: t.payload.dataId,
                analytics: t.payload.analytics,
                lastOu: n.selectedOrgUnits.value,
                lastPe: n.selectedPeriod.value
            }), n
        }

        function s(e, t) {
            var n = !1,
                a = null;
            return e.forEach(function(e, i) {
                e.id === t && (n = !0, a = i)
            }), {
                checker: n,
                index: a
            }
        }

        function l(e, t) {
            var n = c.cloneDeep(e);
            return n.selectedGroup = t.payload, n
        }
        var c = n("M4fF"),
            d = (n.n(c), n("PVdj"));
        t.a = a
    },
    "9w+2": function(e, t) {
        e.exports = '<ul class="list-inline" *ngIf="dataOptions.length != 0">\n  <li *ngFor="let option of dataOptions" style="padding-right: 0px">\n    <a (click)="toggleDataOption(option.prefix, $event)"\n       class="btn btn-sm {{option.selected ? \'btn-info\' : \'btn-default\'}}"\n       style="height: 32px; width: 50px; border-radius: 36px;padding: 5px 5px"\n       title="Click to see {{option.name}}"\n    >\n      {{option.name}}\n    </a>\n  </li>\n</ul>\n<div appClickOutside (clickOutside)="showGroups = false" [ngClass]="{\'hiddenTree\': !need_groups}">\n  <button class="btn btn-default btn-sm btn-block" (click)="toggleGroups($event)">\n    <span class="pull-left">{{ selectedGroup?.name || \'Select Table\'}}</span>\n    <span class="pull-right">\n      <span class="glyphicon glyphicon-triangle-bottom"></span>\n    </span>\n  </button>\n  <div *ngIf="showGroups" class="panel panel-default" style="margin-top: 4px;position: absolute;z-index: 999;width: 90%">\n  <div class="panel-body" style="padding: 5px;">\n    <input type="search" class="form-control input-sm" placeholder="Search" style="margin-bottom: 5px;" [(ngModel)]="querystring">\n    <ul class="list-unstyled metadata-list  tree-area1">\n      <li *ngFor="let item of dataGroups | fuseSearch:searchOptions:querystring" (click)="setSelectedGroup(item, $event)">{{ item.name }}</li>\n    </ul>\n  </div>\n</div>\n</div>\n<input type="text" class="form-control input-sm" *ngIf="listItems.length != 0" (focus)="showBody = true" placeholder="Search" style="margin-top: 4px;" [(ngModel)]="listchanges">\n<div class="row" style="margin-top:2px;padding-left: 15px; padding-right: 15px;min-height: 390px">\n  <table class="table table-bordered" >\n    <tbody>\n      <tr>\n        <th width="50%">\n          <ul class="list-inline data-header-list">\n            <li>Available <span class="fadeOut">({{(listItems| fuseSearch:searchOptions:listchanges).length }})</span></li>\n            <li class="pull-right pointer"><a (click)="selectAllItems($event)" title="Select all"><i class="fa fa-angle-double-right"></i></a></li>\n          </ul>\n        </th>\n        <th width="50%">\n          <ul class="list-inline data-header-list">\n            <li class="pull-right">Selected <span class="fadeOut">({{ selectedItems.length }})</span></li>\n            <li class="pull-left pointer"><a (click)="deselectAllItems($event)" title="Remove all selections"><i class="fa fa-angle-double-left"></i></a></li>\n          </ul>\n        </th>\n      </tr>\n      <tr>\n        <td width="50%" style="height: 90%">\n          <ul class="list-unstyled metadata-list scrollable">\n            <li *ngIf="listItems.length == 0">Loading...</li>\n            <li *ngFor="let item of listItems | fuseSearch:searchOptions:listchanges | paginate: { id: \'foo\',\n                                                      itemsPerPage: 40,\n                                                      currentPage: p };trackBy: trackByFn "\n                (click)="addSelected(item, $event)"\n                [ngClass]="{\'hiddenTree\': inSelected(item, selectedItems)}"\n                title="Click to select item">\n              {{ item.name }}\n            </li>\n            <li *ngIf="(listItems| fuseSearch:searchOptions:listchanges).length >= 100">\n              <pagination-controls  id="foo"\n                                    (pageChange)="p = $event"\n                                    maxSize="0">\n              </pagination-controls>\n            </li>\n          </ul>\n        </td>\n        <td width="50%">\n          <ul class="list-unstyled metadata-list scrollable">\n            <li *ngFor="let item of selectedItems | paginate:{id: \'selectedlist\',itemsPerPage: 100, currentPage: k}"\n                (click)="removeSelected(item, $event)"\n                style="cursor: move"\n                dnd-droppable (onDropSuccess)="transferDataSuccess($event,item)"\n                title="click to unselect item"\n            >\n              <div dnd-draggable [dragEnabled]="true" [dragData]="item"> {{ item.name }} </div>\n            </li>\n            <li *ngIf="selectedItems.length > 100">\n              <pagination-controls id =\'selectedlist\' maxSize="0" (pageChange)="k = $event"></pagination-controls>\n            </li>\n          </ul>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  \x3c!--<div class="col-md-6" style="border: solid 1px #eee; height: 100px;">--\x3e\n    \x3c!--&lt;!&ndash;<div class="panel panel-default" style="height: 100px;">&ndash;&gt;--\x3e\n\n    \x3c!--&lt;!&ndash;</div>&ndash;&gt;--\x3e\n  \x3c!--</div>--\x3e\n  \x3c!--<div class="col-md-6" style="border: solid 1px #eee; height: 100px;">--\x3e\n    \x3c!--&lt;!&ndash;<div class="panel panel-default" style="height: 100px;">&ndash;&gt;--\x3e\n\n    \x3c!--&lt;!&ndash;</div>&ndash;&gt;--\x3e\n  \x3c!--</div>--\x3e\n</div>\n'
    },
    "B3/R": function(e, t) {
        e.exports = '<span appClickOutside (clickOutside)="showLayout = false">\n\n  <a class="btn btn-default options-toggle-btn" title="Click for more options with tables" (click)="showLayout = !showLayout">\n    <img src="assets/img/options.png" height="15"/>\n    Options\n  </a>\n  <div style="position: absolute">\n    <div *ngIf="showLayout" class="layout-block" [ng2-draggable]="true" [ng2DraggableHandle]="elementreference">\n      <div *ngIf="currentVisualization === \'TABLE\'">\n        <h4>Data</h4>\n        <p>\n          <label>\n            <input type="checkbox" [(ngModel)]="options.column_totals"> Show column totals\n          </label>\n        </p>\n        <p>\n          <label>\n            <input type="checkbox" [(ngModel)]="options.row_totals"> Show row totals\n          </label>\n        </p>\n        <p>\n          <label>\n            <input type="checkbox" [(ngModel)]="options.column_sub_total"> Show column sub-totals\n          </label>\n        </p>\n        <p>\n          <label>\n            <input type="checkbox" [(ngModel)]="options.row_sub_total"> Show row sub-totals\n          </label>\n        </p>\n        <p>\n          <label>\n            <input type="checkbox" [(ngModel)]="options.column_avg"> Show column average\n          </label>\n        </p>\n        <p>\n          <label>\n            <input type="checkbox" [(ngModel)]="options.row_avg"> Show row average\n          </label>\n        </p>\n        <p>\n          <label>\n            <input type="checkbox" [(ngModel)]="options.dimension_labels"> Show dimension labels\n          </label>\n        </p>\n        <p>\n          <label>\n            <input type="checkbox" [(ngModel)]="options.hide_empty_row"> Hide empty rows\n          </label>\n        </p>\n      </div>\n      \x3c!--<p>--\x3e\n        \x3c!--<label>--\x3e\n          \x3c!--<input type="checkbox" [(ngModel)]="options.show_text_data"> Show Text Data--\x3e\n        \x3c!--</label>--\x3e\n      \x3c!--</p>--\x3e\n      \x3c!--<h4>Organisation Units</h4>--\x3e\n      \x3c!--<p>--\x3e\n        \x3c!--<label>--\x3e\n          \x3c!--<input type="checkbox" [(ngModel)]="options.show_hierarchy"> Show hierarchy--\x3e\n        \x3c!--</label>--\x3e\n      \x3c!--</p>--\x3e\n      \x3c!--<h4>General</h4>--\x3e\n      \x3c!--<p>--\x3e\n        \x3c!--<label>--\x3e\n          \x3c!--Table Title: <input type="text" class="form-control"  [(ngModel)]="options.table_title">--\x3e\n        \x3c!--</label>--\x3e\n      \x3c!--</p>--\x3e\n      <div class="col-sm-12">\n        <div class="pull-right">\n          <button class="btn btn-default btn-sm" (click)="updateOption()"><i class="fa fa-refresh"></i>Update</button>\n          <button class="btn btn-default btn-sm" (click)="showLayout= false"><i class="fa fa-times"></i>Close</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</span>\n'
    },
    Bwsn: function(e, t) {
        e.exports = '<div class="panel panel-default" style="border-style: none; margin-bottom: 0px; margin-top: 0px; border-bottom: solid 1px #eee;">\n  <div class="panel-heading" style="background-color: #ffffff;padding-bottom: 5px;padding-top: 5px;padding-left: 3px">\n    <div class="" (click)="displayOrgTree()">\n          <span *ngIf="!orgunit_tree_config.loading">\n              {{  getProperPreOrgunitName() }}\n          </span>\n      <span *ngIf="orgunit_model.selected_orgunits.length > 10 && orgunit_model.selected_user_orgunit.length == 0">\n            <span class="selected-item">\n              {{ orgunit_model.selected_orgunits[0].name }}\n              <a (click)="deActivateNode(orgunit_model.selected_orgunits[0].id,orgtree,$event)" class="removeorgunit" >x</a>\n            </span>\n            <span class="selected-item">\n              {{ orgunit_model.selected_orgunits[1].name }}\n              <a (click)="deActivateNode(orgunit_model.selected_orgunits[1].id,orgtree,$event)" class="removeorgunit">x</a>\n            </span>\n            <span class="selected-item">\n              &nbsp; and {{ orgunit_model.selected_orgunits.length - 2 }} more\n            </span>\n          </span>\n      <span *ngIf="orgunit_model.selected_orgunits.length <= 10 && orgunit_model.selected_user_orgunit.length == 0">\n             <span *ngFor="let item of orgunit_model.selected_orgunits" class="selected-item ng-binding ng-scope">\n              {{ item.name }}\n               <a (click)="deActivateNode(item.id,orgtree,$event)" class="removeorgunit">x</a>\n            </span>\n          </span>\n      <span class="no-selection"*ngIf="orgunit_model.selected_orgunits.length == 0 && !orgunit_tree_config.loading && orgunit_model.selection_mode != \'Usr_orgUnit\'">{{ orgunit_tree_config.placeholder }}</span>\n      <span  *ngIf="orgunit_model.selected_orgunits.length > 0" class="pull-right">\n        <span class="selected-item" style="cursor: pointer" (click)="clearAll()" style="opacity: 0.7">X clear all</span>\n      </span>\n      <span *ngIf="orgunit_tree_config.loading">{{ orgunit_tree_config.loading_message }}</span>\n    </div>\n  </div>\n</div>\n<div class="panel-body" style="padding: 3px;" [ngClass]="{\'hiddenTree\':showOrgTree}">\n  <div class="" [ngClass]="{\'hiddenTree\':showOrgTree}" id="tree_view">\n    <div class="col-sm-3" style="padding-left: 0px; margin-bottom: 5px">\n      <div class="btn-group">\n        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Switch selection between: by Level, Group or Current selected">\n          <img *ngIf="orgunit_model.selection_mode == \'orgUnit\'" src="assets/img/icons8-Tree.png" class="group-image">\n          <img *ngIf="orgunit_model.selection_mode == \'Level\'" src="assets/img/icons8-Genealogy.png" class="group-image">\n          <img *ngIf="orgunit_model.selection_mode == \'Group\'" src="assets/img/icons8-Group.png" class="group-image">\n          <span class="caret"></span>\n        </button>\n        <ul class="dropdown-menu">\n          <li>\n            <a (click)="setType(\'orgUnit\')">\n              <span *ngIf="orgunit_model.selection_mode == \'orgUnit\'" class="glyphicon glyphicon-ok"></span>\n              <img src="assets/img/icons8-Tree.png" class="group-image">\n              Select Administrative Unit\n            </a>\n          </li>\n          <li>\n            <a (click)="setType(\'Level\')">\n              <span *ngIf="orgunit_model.selection_mode == \'Level\'" class="glyphicon glyphicon-ok"></span>\n              <img src="assets/img/icons8-Genealogy.png" class="group-image">\n              Select Level\n            </a>\n          </li>\n          <li>\n            <a (click)="setType(\'Group\')">\n              <span *ngIf="orgunit_model.selection_mode == \'Group\'" class="glyphicon glyphicon-ok"></span>\n              <img src="assets/img/icons8-Group.png" class="group-image">\n              Select Group\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    \x3c!--org_unit_groups--\x3e\n    <div class="col-sm-9" style="padding-right: 0px; margin-bottom: 5px" *ngIf="orgunit_model.selection_mode == \'Group\'">\n      <app-multiselect [placeholder]="\'Select Admin.units group\'" [selected_items]="orgunit_model.selected_groups" [items]="orgunit_model.orgunit_groups" (onSelected)="setSelectedGroups($event)"></app-multiselect>\n\n    </div>\n    \x3c!--user_org_unit--\x3e\n    <div class="col-sm-9" style="padding-right: 0px; margin-bottom: 5px" [ngClass]="{\'hiddenTree\': orgunit_model.selection_mode != \'orgUnit\'}">\n      <app-multiselect #period_selector [placeholder]="\'Select Administrative Unit\'" [items]="user_orgunits_types" (onSelected)="setSelectedUserOrg($event)"></app-multiselect>\n\n    </div>\n    \x3c!--org_unit_levels--\x3e\n    <div class="col-sm-9" style="padding-right: 0px; margin-bottom: 5px" *ngIf="orgunit_model.selection_mode == \'Level\'">\n      <app-multiselect [prefix]="\'Level: \'" [prefix_multiple]="\'Levels: \'" [placeholder]="\'Select Admin.units levels\'" [selected_items]="orgunit_model.selected_levels" [items]="orgunit_model.orgunit_levels | filterLevel:organisationunits[0]:orgunit_model.selected_orgunits" (onSelected)="setSelectedLevels($event)"></app-multiselect>\n\n    </div>\n    \x3c!--<div class="search-area">--\x3e\n      \x3c!--<form *ngIf="!orgunit_tree_config.loading && orgunit_tree_config.show_search && orgunit_model.selection_mode != \'Usr_orgUnit\'" style="border-bottom: solid 1px blanchedalmond;">--\x3e\n        \x3c!--<input #filter (keyup)="filterNodes(filter.value, orgtree)" placeholder="{{ orgunit_tree_config.search_text }}" class="search_field"/>--\x3e\n      \x3c!--</form>--\x3e\n    \x3c!--</div>--\x3e\n    <div *ngIf="orgunit_tree_config.loading">{{ orgunit_tree_config.loading_message }}</div>\n    <div class="tree-area" [ngClass]="{\'someclass\': orgunit_model.selected_user_orgunit.length != 0}">\n      <tree-root\n        #orgtree\n        [nodes]="organisationunits"\n        [focused]="true"\n        [options]="customTemplateStringOrgunitOptions"\n        (onActivate)="activateOrg($event)"\n        (onDeactivate)="deactivateOrg($event)"\n      >\n        <ng-template #treeNodeTemplate let-node>\n          <span (click)="updateModelOnSelect(node.data)">{{ node.data.name }}</span>\n        </ng-template>\n      </tree-root>\n    </div>\n\n  </div>\n</div>\n\n'
    },
    D9Xg: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return r
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            r = function() {
                function e() {}
                return e.prototype.getPeriodArray = function(e, t) {
                    var n = [];
                    if ("Weekly" == e) n.push({
                        id: "",
                        name: ""
                    });
                    else if ("Monthly" == e) n.push({
                        id: t + "12",
                        name: "December " + t
                    }, {
                        id: t + "11",
                        name: "November " + t
                    }, {
                        id: t + "10",
                        name: "October " + t
                    }, {
                        id: t + "09",
                        name: "September " + t
                    }, {
                        id: t + "08",
                        name: "August " + t
                    }, {
                        id: t + "07",
                        name: "July " + t
                    }, {
                        id: t + "06",
                        name: "June " + t
                    }, {
                        id: t + "05",
                        name: "May " + t
                    }, {
                        id: t + "04",
                        name: "April " + t
                    }, {
                        id: t + "03",
                        name: "March " + t
                    }, {
                        id: t + "02",
                        name: "February " + t
                    }, {
                        id: t + "01",
                        name: "January " + t,
                        selected: !0
                    });
                    else if ("BiMonthly" == e) n.push({
                        id: t + "01B",
                        name: "January - February " + t,
                        selected: !0
                    }, {
                        id: t + "02B",
                        name: "March - April " + t
                    }, {
                        id: t + "03B",
                        name: "May - June " + t
                    }, {
                        id: t + "04B",
                        name: "July - August " + t
                    }, {
                        id: t + "05B",
                        name: "September - October " + t
                    }, {
                        id: t + "06B",
                        name: "November - December " + t
                    });
                    else if ("Quarterly" == e) n.push({
                        id: t + "Q4",
                        name: "October - December " + t
                    }, {
                        id: t + "Q3",
                        name: "July - September " + t
                    }, {
                        id: t + "Q2",
                        name: "April - June " + t
                    }, {
                        id: t + "Q1",
                        name: "January - March " + t,
                        selected: !0
                    });
                    else if ("SixMonthly" == e) n.push({
                        id: t + "S1",
                        name: "January - June " + t,
                        selected: !0
                    }, {
                        id: t + "S2",
                        name: "July - December " + t
                    });
                    else if ("SixMonthlyApril" == e) {
                        var a = parseInt(t) + 1;
                        n.push({
                            id: t + "AprilS2",
                            name: "October " + t + " - March " + a,
                            selected: !0
                        }, {
                            id: t + "AprilS1",
                            name: "April - September " + t
                        })
                    } else if ("FinancialOct" == e)
                        for (var i = 0; i <= 10; i++) {
                            var a = parseInt(t) - i,
                                o = a + 1;
                            n.push({
                                id: a + "Oct",
                                name: "October " + a + " - September " + o
                            })
                        } else if ("Yearly" == e)
                        for (var i = 0; i <= 10; i++) {
                            var a = parseInt(t) - i;
                            n.push({
                                id: a,
                                name: a
                            })
                        } else if ("FinancialJuly" == e)
                        for (var i = 0; i <= 10; i++) {
                            var a = parseInt(t) - i,
                                o = a + 1;
                            n.push({
                                id: a + "July",
                                name: "July " + a + " - June " + o
                            })
                        } else if ("FinancialApril" == e)
                        for (var i = 0; i <= 10; i++) {
                            var a = parseInt(t) - i,
                                o = a + 1;
                            n.push({
                                id: a + "April",
                                name: "April " + a + " - March " + o
                            })
                        } else "Relative Weeks" == e ? n.push({
                            id: "THIS_WEEK",
                            name: "This Week"
                        }, {
                            id: "LAST_WEEK",
                            name: "Last Week"
                        }, {
                            id: "LAST_4_WEEK",
                            name: "Last 4 Weeks",
                            selected: !0
                        }, {
                            id: "LAST_12_WEEK",
                            name: "last 12 Weeks"
                        }, {
                            id: "LAST_52_WEEK",
                            name: "Last 52 weeks"
                        }) : "RelativeMonth" == e ? n.push({
                            id: "THIS_MONTH",
                            name: "This Month"
                        }, {
                            id: "LAST_MONTH",
                            name: "Last Month"
                        }, {
                            id: "LAST_3_MONTHS",
                            name: "Last 3 Months"
                        }, {
                            id: "LAST_6_MONTHS",
                            name: "Last 6 Months"
                        }, {
                            id: "LAST_12_MONTHS",
                            name: "Last 12 Months",
                            selected: !0
                        }) : "Relative Bi-Month" == e ? n.push({
                            id: "THIS_BIMONTH",
                            name: "This Bi-month"
                        }, {
                            id: "LAST_BIMONTH",
                            name: "Last Bi-month"
                        }, {
                            id: "LAST_6_BIMONTHS",
                            name: "Last 6 bi-month",
                            selected: !0
                        }) : "RelativeQuarter" == e ? n.push({
                            id: "THIS_QUARTER",
                            name: "This Quarter"
                        }, {
                            id: "LAST_QUARTER",
                            name: "Last Quarter"
                        }, {
                            id: "LAST_4_QUARTERS",
                            name: "Last 4 Quarters",
                            selected: !0
                        }) : "RelativeSixMonthly" == e ? n.push({
                            id: "THIS_SIX_MONTH",
                            name: "This Six-month"
                        }, {
                            id: "LAST_SIX_MONTH",
                            name: "Last Six-month"
                        }, {
                            id: "LAST_2_SIXMONTHS",
                            name: "Last 2 Six-month",
                            selected: !0
                        }) : "RelativeFinancialYear" == e ? n.push({
                            id: "THIS_FINANCIAL_YEAR",
                            name: "This Financial Year"
                        }, {
                            id: "LAST_FINANCIAL_YEAR",
                            name: "Last Financial Year",
                            selected: !0
                        }, {
                            id: "LAST_5_FINANCIAL_YEARS",
                            name: "Last 5 Financial Years"
                        }) : "RelativeYear" == e && n.push({
                            id: "THIS_YEAR",
                            name: "This Year"
                        }, {
                            id: "LAST_YEAR",
                            name: "Last Year",
                            selected: !0
                        }, {
                            id: "LAST_5_YEARS",
                            name: "Last 5 Five Years"
                        });
                    return n
                }, e.prototype.getFinencialPeriodArray = function(e, t) {
                    var n = [],
                        a = parseInt(t) - 1;
                    if ("Monthly" == e) n.push({
                        id: a + "07",
                        name: "July " + a
                    }, {
                        id: a + "08",
                        name: "August " + a
                    }, {
                        id: a + "09",
                        name: "September " + a
                    }, {
                        id: a + "10",
                        name: "October " + a
                    }, {
                        id: a + "11",
                        name: "November " + a
                    }, {
                        id: a + "12",
                        name: "December " + a
                    }, {
                        id: t + "01",
                        name: "January " + t,
                        selected: !0
                    }, {
                        id: t + "02",
                        name: "February " + t
                    }, {
                        id: t + "03",
                        name: "March " + t
                    }, {
                        id: t + "04",
                        name: "April " + t
                    }, {
                        id: t + "05",
                        name: "May " + t
                    }, {
                        id: t + "06",
                        name: "June " + t
                    });
                    else if ("Quarterly" == e) n.push({
                        id: a + "Q3",
                        name: "July - September " + a
                    }, {
                        id: a + "Q4",
                        name: "October - December " + a
                    }, {
                        id: t + "Q1",
                        name: "January - March " + t,
                        selected: !0
                    }, {
                        id: t + "Q2",
                        name: "April - June " + t
                    });
                    else if ("FinancialJuly" == e)
                        for (var i = 0; i <= 10; i++) {
                            var o = parseInt(t) - i,
                                r = o + 1;
                            n.push({
                                id: o + "July",
                                name: "July " + o + " - June " + r
                            })
                        } else "RelativeMonth" == e ? n.push({
                            id: "THIS_MONTH",
                            name: "This Month"
                        }, {
                            id: "LAST_MONTH",
                            name: "Last Month"
                        }, {
                            id: "LAST_3_MONTHS",
                            name: "Last 3 Months"
                        }, {
                            id: "LAST_6_MONTHS",
                            name: "Last 6 Months"
                        }, {
                            id: "LAST_12_MONTHS",
                            name: "Last 12 Months",
                            selected: !0
                        }) : "RelativeQuarter" == e ? n.push({
                            id: "THIS_QUARTER",
                            name: "This Quarter"
                        }, {
                            id: "LAST_QUARTER",
                            name: "Last Quarter"
                        }, {
                            id: "LAST_4_QUARTERS",
                            name: "Last 4 Quarters",
                            selected: !0
                        }) : "RelativeFinancialYear" == e ? n.push({
                            id: "THIS_FINANCIAL_YEAR",
                            name: "This Financial Year"
                        }, {
                            id: "LAST_FINANCIAL_YEAR",
                            name: "Last Financial Year",
                            selected: !0
                        }, {
                            id: "LAST_5_FINANCIAL_YEARS",
                            name: "Last 5 Financial Years"
                        }) : "RelativeYear" == e && n.push({
                            id: "THIS_YEAR",
                            name: "This Year"
                        }, {
                            id: "LAST_YEAR",
                            name: "Last Year",
                            selected: !0
                        }, {
                            id: "LAST_5_YEARS",
                            name: "Last 5 Five Years"
                        });
                    return n
                }, e.prototype.getLastPeriod = function(e, t) {
                    if (void 0 === t && (t = "Quarterly"), "Weekly" == t);
                    else {
                        if ("Monthly" == t) {
                            var n = e.substring(0, 4),
                                a = e.substring(4, 6),
                                i = "";
                            if ("02" == a) i = n + "01";
                            else if ("03" == a) i = n + "02";
                            else if ("04" == a) i = n + "03";
                            else if ("05" == a) i = n + "04";
                            else if ("06" == a) i = n + "05";
                            else if ("07" == a) i = n + "06";
                            else if ("08" == a) i = n + "07";
                            else if ("09" == a) i = n + "08";
                            else if ("10" == a) i = n + "09";
                            else if ("11" == a) i = n + "10";
                            else if ("12" == a) i = n + "11";
                            else if ("01" == a) {
                                var o = parseInt(n) - 1;
                                i = o + "12"
                            }
                            return i
                        }
                        if ("BiMonthly" == t) {
                            var n = e.substring(0, 4),
                                a = e.substring(4, 6),
                                i = "";
                            if ("02" == a) i = n + "01B";
                            else if ("03" == a) i = n + "02B";
                            else if ("04" == a) i = n + "03B";
                            else if ("05" == a) i = n + "04B";
                            else if ("06" == a) i = n + "05B";
                            else if ("01" == a) {
                                var o = parseInt(n) - 1;
                                i = o + "06B"
                            }
                            return i
                        }
                        if ("Quarterly" == t) {
                            var n = e.substring(0, 4),
                                r = e.substring(4, 6),
                                i = "";
                            if ("Q4" == r) i = n + "Q3";
                            else if ("Q3" == r) i = n + "Q2";
                            else if ("Q2" == r) i = n + "Q1";
                            else if ("Q1" == r) {
                                var o = parseInt(n) - 1;
                                i = o + "Q4"
                            }
                            return i
                        }
                        if ("SixMonthly" == t) {
                            var n = e.substring(0, 4),
                                s = e.substring(4, 6),
                                i = "";
                            if ("S1" == s) {
                                var o = parseInt(n) - 1;
                                i = o + "S2"
                            } else "S2" == s && (i = n + "S1");
                            return i
                        }
                        if ("SixMonthlyApril" == t) {
                            var n = e.substring(0, 4),
                                s = e.substring(4, 12),
                                i = "";
                            if ("AprilS2" == s) i = n + "AprilS1";
                            else if ("AprilS1" == s) {
                                var o = parseInt(n) - 1;
                                i = o + "AprilS2"
                            }
                            return i
                        }
                        if ("FinancialOct" == t) {
                            var n = e.substring(0, 4),
                                l = parseInt(n) - 1;
                            return l + "Oct"
                        }
                        if ("Yearly" == t) return parseInt(e) - 1;
                        if ("FinancialJuly" == t) {
                            var n = e.substring(0, 4),
                                l = parseInt(n) - 1;
                            return l + "July"
                        }
                        if ("FinancialApril" == t) {
                            var n = e.substring(0, 4),
                                l = parseInt(n) - 1;
                            return l + "April"
                        }
                    }
                }, e.prototype.getNextPeriod = function(e, t) {
                    if (void 0 === t && (t = "Quarterly"), "Weekly" == t);
                    else {
                        if ("Monthly" == t) {
                            var n = e.substring(0, 4),
                                a = e.substring(4, 6),
                                i = "";
                            if ("02" == a) i = n + "03";
                            else if ("03" == a) i = n + "04";
                            else if ("04" == a) i = n + "05";
                            else if ("05" == a) i = n + "06";
                            else if ("06" == a) i = n + "07";
                            else if ("07" == a) i = n + "08";
                            else if ("08" == a) i = n + "09";
                            else if ("09" == a) i = n + "10";
                            else if ("10" == a) i = n + "11";
                            else if ("11" == a) i = n + "12";
                            else if ("12" == a) {
                                var o = parseInt(n) + 1;
                                i = o + "01"
                            } else "01" == a && (i = n + "02");
                            return i
                        }
                        if ("BiMonthly" == t) {
                            var n = e.substring(0, 4),
                                a = e.substring(4, 6),
                                i = "";
                            if ("02" == a) i = n + "03B";
                            else if ("03" == a) i = n + "04B";
                            else if ("04" == a) i = n + "05B";
                            else if ("05" == a) i = n + "06B";
                            else if ("06" == a) {
                                var o = parseInt(n) + 1;
                                i = o + "01B"
                            } else "01" == a && (i = n + "02B");
                            return i
                        }
                        if ("Quarterly" == t) {
                            var n = e.substring(0, 4),
                                r = e.substring(4, 6),
                                i = "";
                            if ("Q1" == r) i = n + "Q2";
                            else if ("Q3" == r) i = n + "Q4";
                            else if ("Q2" == r) i = n + "Q3";
                            else if ("Q4" == r) {
                                var o = parseInt(n) + 1;
                                i = o + "Q1"
                            }
                            return i
                        }
                        if ("SixMonthly" == t) {
                            var n = e.substring(0, 4),
                                s = e.substring(4, 6),
                                i = "";
                            if ("S2" == s) {
                                var o = parseInt(n) + 1;
                                i = o + "S1"
                            } else "S1" == s && (i = n + "S2");
                            return i
                        }
                        if ("SixMonthlyApril" == t) {
                            var n = e.substring(0, 4),
                                s = e.substring(4, 12),
                                i = "";
                            if ("AprilS2" == s) {
                                var o = parseInt(n) + 1;
                                i = o + "AprilS1"
                            } else "AprilS1" == s && (i = n + "AprilS2");
                            return i
                        }
                        if ("FinancialOct" == t) {
                            var n = e.substring(0, 4),
                                l = parseInt(n) + 1;
                            return l + "Oct"
                        }
                        if ("Yearly" == t) return parseInt(e) + 1;
                        if ("FinancialJuly" == t) {
                            var n = e.substring(0, 4),
                                l = parseInt(n) + 1;
                            return l + "July"
                        }
                        if ("FinancialApril" == t) {
                            var n = e.substring(0, 4),
                                l = parseInt(n) + 1;
                            return l + "April"
                        }
                    }
                }, e.prototype.getPeriodName = function(e) {
                    for (var t = 0, n = this.getPeriodArray(this.deducePeriodType(e).type, e.substr(0, 4)); t < n.length; t++) {
                        var a = n[t];
                        if (e == a.id) return a.name
                    }
                }, e.prototype.deducePeriodType = function(e) {
                    var t = e.length,
                        n = "",
                        a = {
                            type: "",
                            year: e.substr(0, 4)
                        };
                    return 4 == t ? n = "Yearly" : 6 == t ? n = "Q" == e.substr(4, 1) ? "Quarterly" : "S" == e.substr(4, 1) ? "SixMonthly" : "Monthly" : 7 == t ? "B" == e.substr(6, 1) ? n = "BiMonthly" : "Oct" == e.substr(4, 3) && (n = "FinancialOct") : 8 == t ? "July" == e.substr(4, 4) && (n = "FinancialJuly") : 9 == t ? "April" == e.substr(4, 5) && (n = "FinancialApril") : 11 == t && "AprilS" == e.substr(4, 6) && (n = "SixMonthlyApril"), a.type = n, a
                }, e
            }();
        r = i([n.i(a.c)(), o("design:paramtypes", [])], r)
    },
    DMg4: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("5+/9"),
            o = n("Gvdl"),
            r = (n.n(o), n("nSQ8")),
            s = n("aAWt"),
            l = n("W4zo");
        n.d(t, "a", function() {
            return p
        });
        var c = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            d = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            p = function() {
                function e(e, t) {
                    var n = this;
                    this.http = e, this.orgunitService = t, this.orgunit_model = {
                        selection_mode: "Usr_orgUnit",
                        selected_levels: [],
                        show_update_button: !0,
                        selected_groups: [],
                        orgunit_levels: [],
                        orgunit_groups: [],
                        selected_orgunits: [],
                        user_orgunits: [],
                        type: "report",
                        selected_user_orgunit: []
                    }, this.initial_usr_orgunit = [], this.orgunit_tree_config = {
                        show_search: !0,
                        search_text: "Search",
                        level: null,
                        loading: !0,
                        loading_message: "Loading Organisation units...",
                        multiple: !0,
                        multiple_key: "none",
                        placeholder: "Select Organisation Unit"
                    }, this.onOrgUnitUpdate = new a.F, this.onOrgUnitInit = new a.F, this.onOrgUnitModelUpdate = new a.F, this.orgUnit = {}, this.root_url = "../../../", this.nodes = null, this.orgunit_levels = [], this.organisationunits = [], this.selected_orgunits = [], this.showOrgTree = !1, this.user_orgunits_types = [{
                        id: "USER_ORGUNIT",
                        name: "User Admin Unit",
                        shown: !0
                    }, {
                        id: "USER_ORGUNIT_CHILDREN",
                        name: "User sub-units",
                        shown: !0
                    }, {
                        id: "USER_ORGUNIT_GRANDCHILDREN",
                        name: "User sub-x2-units",
                        shown: !0
                    }], this.activateOrg = function(e) {
                        n.period_selector.reset(), "Usr_orgUnit" === n.orgunit_model.selection_mode && (n.orgunit_model.selection_mode = "orgUnit", n.period_selector.reset()), n.selected_orgunits = [e.node.data], n.checkOrgunitAvailabilty(e.node.data, n.orgunit_model.selected_orgunits) || n.orgunit_model.selected_orgunits.push(e.node.data), n.orgUnit = e.node.data, n.emit()
                    }, this.orgunit_tree_config.hasOwnProperty("multiple_key") || (this.orgunit_tree_config.multiple_key = "none")
                }
                return e.prototype.updateModelOnSelect = function(e) {
                    this.orgunit_model.show_update_button || (this.onOrgUnitUpdate.emit({
                        name: "ou",
                        value: e.id
                    }), this.displayOrgTree())
                }, e.prototype.ngOnInit = function() {
                    var e = this;
                    if (console.log("orgunitMOdel", this.orgunit_model), this.orgunit_tree_config.multiple) {
                        if ("none" === this.orgunit_tree_config.multiple_key) {
                            var t = {
                                mouse: {
                                    dblClick: i.b.TOGGLE_EXPANDED,
                                    click: function(e, t, n) {
                                        return i.b.TOGGLE_SELECTED_MULTI(e, t, n)
                                    }
                                }
                            };
                            this.customTemplateStringOrgunitOptions = {
                                actionMapping: t
                            }
                        } else if ("control" === this.orgunit_tree_config.multiple_key) {
                            var t = {
                                mouse: {
                                    click: function(e, t, n) {
                                        n.ctrlKey ? i.b.TOGGLE_SELECTED_MULTI(e, t, n) : i.b.TOGGLE_SELECTED(e, t, n)
                                    }
                                }
                            };
                            this.customTemplateStringOrgunitOptions = {
                                actionMapping: t
                            }
                        } else if ("shift" === this.orgunit_tree_config.multiple_key) {
                            var t = {
                                mouse: {
                                    click: function(e, t, n) {
                                        n.shiftKey ? i.b.TOGGLE_SELECTED_MULTI(e, t, n) : i.b.TOGGLE_SELECTED(e, t, n)
                                    }
                                }
                            };
                            this.customTemplateStringOrgunitOptions = {
                                actionMapping: t
                            }
                        }
                    } else {
                        var t = {
                            mouse: {
                                dblClick: i.b.TOGGLE_EXPANDED,
                                click: function(e, t, n) {
                                    return i.b.TOGGLE_SELECTED(e, t, n)
                                }
                            }
                        };
                        this.customTemplateStringOrgunitOptions = {
                            actionMapping: t
                        }
                    }
                    this.orgunitService.getOrgunitLevelsInformation().subscribe(function(t) {
                        e.orgunit_model.orgunit_levels = t.organisationUnitLevels, e.orgunitService.getOrgunitGroups().subscribe(function(t) {
                            e.orgunit_model.orgunit_groups = t
                        }), e.orgunitService.getUserInformation(e.orgunit_model.type).subscribe(function(n) {
                            var a = e.orgunitService.getUserHighestOrgUnitlevel(n);
                            e.orgunit_model.user_orgunits = e.orgunitService.getUserOrgUnits(n), console.log(e.orgunit_model.user_orgunits), e.orgunitService.user_orgunits = e.orgunitService.getUserOrgUnits(n), "Usr_orgUnit" === e.orgunit_model.selection_mode && (e.orgunit_model.selected_orgunits = e.orgunit_model.user_orgunits);
                            var i = t.pager.total,
                                o = e.orgunitService.getuserOrganisationUnitsWithHighestlevel(a, n),
                                r = parseInt(i) - (parseInt(a) - 1);
                            e.orgunitService.getInitialOrgunitsForTree(o).subscribe(function(t) {
                                e.organisationunits = t, e.orgunit_tree_config.loading = !1, e.initial_usr_orgunit = [{
                                    id: "USER_ORGUNIT",
                                    name: "User org unit"
                                }];
                                var n = e.orgunitService.generateUrlBasedOnLevels(r);
                                e.orgunitService.getAllOrgunitsForTree1(n, o).subscribe(function(t) {
                                    t[0].expanded = !0, e.organisationunits = t;
                                    for (var n = 0, a = e.orgunit_model.selected_orgunits; n < a.length; n++) {
                                        var i = a[n];
                                        e.activateNode(i.id, e.orgtree, !0)
                                    }
                                    e.prepareOrganisationUnitTree(e.organisationunits, "parent")
                                }, function(t) {
                                    console.log("something went wrong while fetching Organisation units"), e.orgunit_tree_config.loading = !1
                                })
                            }, function(t) {
                                console.log("something went wrong while fetching Organisation units"), e.orgunit_tree_config.loading = !1
                            })
                        })
                    })
                }, e.prototype.clearAll = function() {
                    for (var e = 0, t = this.orgunit_model.selected_orgunits; e < t.length; e++) {
                        var n = t[e];
                        this.deActivateNode(n.id, this.orgtree, null)
                    }
                }, e.prototype.setType = function(e) {
                    this.orgunit_model.selection_mode = e, "orgUnit" != e && (this.orgunit_model.selected_user_orgunit = []), "Level" != e && (this.orgunit_model.selected_levels = []), "Group" != e && (this.orgunit_model.selected_groups = [])
                }, e.prototype.displayOrgTree = function() {}, e.prototype.filterNodes = function(e, t) {
                    t.treeModel.filterNodes(function(t) {
                        return !t.data.name.startsWith(e)
                    })
                }, e.prototype.activateNode = function(e, t, n) {
                    setTimeout(function() {
                        var a = t.treeModel.getNodeById(e);
                        a && a.setIsActive(!0, !0), n && a.toggleExpanded()
                    }, 0)
                }, e.prototype.deActivateNode = function(e, t, n) {
                    setTimeout(function() {
                        var n = t.treeModel.getNodeById(e);
                        n && n.setIsActive(!1, !0)
                    }, 0), null != n && n.stopPropagation()
                }, e.prototype.checkOrgunitAvailabilty = function(e, t) {
                    var n = !1;
                    return t.forEach(function(t) {
                        t.id === e.id && (n = !0)
                    }), n
                }, e.prototype.deactivateOrg = function(e) {
                    var t = this;
                    this.period_selector.reset(), "Usr_orgUnit" === this.orgunit_model.selection_mode && (this.orgunit_model.selection_mode = "orgUnit", this.period_selector.reset()), this.orgunit_model.selected_orgunits.forEach(function(n, a) {
                        e.node.data.id === n.id && t.orgunit_model.selected_orgunits.splice(a, 1)
                    }), this.emit()
                }, e.prototype.emit = function() {
                    console.log("This Model:", this.orgunit_model.selected_orgunits);
                    var e = {};
                    this.orgunit_model.selected_orgunits.forEach(function(t) {
                        e[t.level] || (e[t.level] = []), e[t.level].push(t)
                    });
                    var t = [];
                    Object.keys(e).forEach(function(n) {
                        t.push(e[n])
                    }), this.onOrgUnitUpdate.emit({
                        starting_name: this.getProperPreOrgunitName(),
                        arrayed_org_units: t,
                        items: this.orgunit_model.selected_orgunits,
                        name: "ou",
                        value: this.getOrgUnitsForAnalytics(this.orgunit_model, !1)
                    }), this.onOrgUnitModelUpdate.emit(this.orgunit_model)
                }, e.prototype.setSelectedGroups = function(e) {
                    this.orgunit_model.selected_groups = e, this.onOrgUnitModelUpdate.emit(this.orgunit_model)
                }, e.prototype.setSelectedUserOrg = function(e) {
                    this.orgunit_model.selected_user_orgunit = e, this.emit()
                }, e.prototype.setSelectedLevels = function(e) {
                    this.orgunit_model.selected_levels = e, this.emit()
                }, e.prototype.prepareOrganisationUnitTree = function(e, t) {
                    var n = this;
                    void 0 === t && (t = "top"), "top" === t ? e.children && (e.children.sort(function(e, t) {
                        return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                    }), e.children.forEach(function(e) {
                        n.prepareOrganisationUnitTree(e, "top")
                    })) : e.forEach(function(e) {
                        e.children && (e.children.sort(function(e, t) {
                            return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                        }), e.children.forEach(function(e) {
                            n.prepareOrganisationUnitTree(e, "top")
                        }))
                    })
                }, e.prototype.updateOrgUnitModel = function() {
                    this.displayOrgTree(), this.emit()
                }, e.prototype.getProperPreOrgunitName = function() {
                    return "Group" === this.orgunit_model.selection_mode ? 0 === this.orgunit_model.selected_groups.length ? "" : this.orgunit_model.selected_groups.map(function(e) {
                        return e.name
                    }).join(", ") + " in" : 0 != this.orgunit_model.selected_user_orgunit.length ? 0 === this.orgunit_model.selected_user_orgunit.length ? "" : this.orgunit_model.selected_user_orgunit.map(function(e) {
                        return e.name
                    }).join(", ") : "Level" === this.orgunit_model.selection_mode ? 0 === this.orgunit_model.selected_levels.length ? "" : this.orgunit_model.selected_levels.map(function(e) {
                        return e.name
                    }).join(", ") + " in" : ""
                }, e.prototype.getOrgUnitName = function(e) {
                    return this.orgtree.treeModel.getNodeById(e).name
                }, e.prototype.getOrgUnitsForAnalytics = function(e, t) {
                    var n = [],
                        a = "";
                    if (0 != e.selected_user_orgunit.length) e.selected_user_orgunit.forEach(function(e) {
                        a += e.id + ";"
                    });
                    else {
                        if (1 === e.selected_orgunits.length) {
                            var i = this.orgtree.treeModel.getNodeById(e.selected_orgunits[0].id);
                            if (n.push(i.id), i.hasOwnProperty("children") && t)
                                for (var o = 0, r = i.children; o < r.length; o++) {
                                    var s = r[o];
                                    n.push(s.id)
                                }
                        } else e.selected_orgunits.forEach(function(e) {
                            n.push(e.id)
                        });
                        e.selection_mode, "Level" === e.selection_mode && e.selected_levels.forEach(function(e) {
                            a += "LEVEL-" + e.level + ";"
                        }), "Group" === e.selection_mode && e.selected_groups.forEach(function(e) {
                            a += "OU_GROUP-" + e.id + ";"
                        })
                    }
                    return a + n.join(";")
                }, e.prototype.getOrgunitLevelsInformation = function() {
                    return this.http.getRow("organisationUnitLevels.json?fields=id,name,level&order=level:asc").map(function(e) {
                        return e.json()
                    }).catch(this.handleError)
                }, e.prototype.getOrgunitGroups = function() {
                    return this.http.getRow("organisationUnitGroups.json?fields=id,name&paging=false").map(function(e) {
                        return e.json()
                    }).catch(this.handleError)
                }, e.prototype.handleError = function(e) {
                    return o.Observable.throw(e)
                }, e.prototype.getUserInformation = function() {
                    return this.http.getRow("me.json?fields=dataViewOrganisationUnits[id,level],organisationUnits[id,level]").map(function(e) {
                        return e.json()
                    }).catch(this.handleError)
                }, e.prototype.getUserHighestOrgUnitlevel = function(e) {
                    var t;
                    return 0 === e.dataViewOrganisationUnits.length ? (t = e.organisationUnits[0].level, e.organisationUnits.forEach(function(e) {
                        e.level <= t && (t = e.level)
                    })) : (t = e.dataViewOrganisationUnits[0].level, e.dataViewOrganisationUnits.forEach(function(e) {
                        e.level <= t && (t = e.level)
                    })), t
                }, e.prototype.getuserOrganisationUnitsWithHighestlevel = function(e, t) {
                    var n = [];
                    return 0 === t.dataViewOrganisationUnits.length ? t.organisationUnits.forEach(function(t) {
                        t.level === e && n.push(t.id)
                    }) : (e = t.dataViewOrganisationUnits[0].level, t.dataViewOrganisationUnits.forEach(function(t) {
                        t.level === e && n.push(t.id)
                    })), n
                }, e.prototype.getInitialOrgunitsForTree = function(e) {
                    return this.http.getRow("me.json?fields=organisationUnits[id,name,children[id,name]]&filter=id:in:[" + e.join(",") + "]&paging=false").map(function(e) {
                        return e.json()
                    }).catch(this.handleError)
                }, e.prototype.generateUrlBasedOnLevels = function(e) {
                    for (var t = "[]", n = 1; n < e + 1; n++) t = t.replace("[]", "[id,name,children[]]");
                    var a = t.substring(1);
                    return a = a.replace(",children[]]", "")
                }, e.prototype.getAllOrgunitsForTree1 = function(e, t) {
                    return this.http.getRow("organisationUnits.json?fields=" + e + "&filter=id:in:[" + t.join(",") + "]&paging=false").map(function(e) {
                        return e.json()
                    }).catch(this.handleError)
                }, e
            }();
        c([n.i(a.O)(), d("design:type", Object)], p.prototype, "orgunit_model", void 0), c([n.i(a.O)(), d("design:type", Object)], p.prototype, "orgunit_tree_config", void 0), c([n.i(a._2)(), d("design:type", "function" == typeof(u = void 0 !== a.F && a.F) && u || Object)], p.prototype, "onOrgUnitUpdate", void 0), c([n.i(a._2)(), d("design:type", "function" == typeof(h = void 0 !== a.F && a.F) && h || Object)], p.prototype, "onOrgUnitInit", void 0), c([n.i(a._2)(), d("design:type", "function" == typeof(g = void 0 !== a.F && a.F) && g || Object)], p.prototype, "onOrgUnitModelUpdate", void 0), c([n.i(a._7)("orgtree"), d("design:type", "function" == typeof(f = void 0 !== i.c && i.c) && f || Object)], p.prototype, "orgtree", void 0), c([n.i(a._7)("period_selector"), d("design:type", "function" == typeof(m = void 0 !== s.a && s.a) && m || Object)], p.prototype, "period_selector", void 0), p = c([n.i(a._3)({
            selector: "[app-org-unit-filter]",
            template: n("Bwsn"),
            styles: [n("P8dd")]
        }), d("design:paramtypes", ["function" == typeof(y = void 0 !== l.a && l.a) && y || Object, "function" == typeof(v = void 0 !== r.a && r.a) && v || Object])], p);
        var u, h, g, f, m, y, v
    },
    F5YQ: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return o
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = r = function() {
                function e() {}
                return e.prototype.transform = function(e, t, n) {
                    return e ? e instanceof Array ? this.sortArray(e, t, n) : "object" == typeof e ? this.transformObject(e, t, n) : e : e
                }, e.prototype.sortArray = function(e, t, n) {
                    var a = e.sort(function(e, n) {
                        return t ? e[t] > n[t] ? 1 : -1 : e > n ? 1 : -1
                    });
                    return n ? a.reverse() : a
                }, e.prototype.transformObject = function(e, t, n) {
                    var a = r.parseExpression(t),
                        i = a.pop(),
                        o = r.getValue(e, a);
                    if (o instanceof Array || (a.push(i), i = null, o = r.getValue(e, a)), !o) return e;
                    var s = this.transform(o, i, n);
                    return r.setValue(e, s, a), e
                }, e.parseExpression = function(e) {
                    return e = e.replace(/\[(\w+)\]/g, ".$1"), e = e.replace(/^\./, ""), e.split(".")
                }, e.getValue = function(e, t) {
                    for (var n = 0, a = t.length; n < a; ++n) {
                        var i = t[n];
                        if (!(i in e)) return;
                        e = e[i]
                    }
                    return e
                }, e.setValue = function(e, t, n) {
                    var a;
                    for (a = 0; a < n.length - 1; a++) e = e[n[a]];
                    e[n[a]] = t
                }, e
            }();
        o = r = i([n.i(a.Y)({
            name: "orderBy"
        })], o);
        var r
    },
    GsWh: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return o
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = function() {
                function e() {}
                return e.prototype.transform = function(e, t) {
                    return e.replace(".", "_")
                }, e
            }();
        o = i([n.i(a.Y)({
            name: "addUnderscore"
        })], o)
    },
    H8UP: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return o
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = function() {
                function e() {}
                return e.prototype.transform = function(e, t, n) {
                    var a = [];
                    return e.forEach(function(e) {
                        if (n.length > 0) {
                            var i = n[0].level;
                            n.forEach(function(e) {
                                e.level < i && (i = e.level)
                            }), i < e.level && a.push(e)
                        } else e.level > t.level && a.push(e)
                    }), a
                }, e
            }();
        o = i([n.i(a.Y)({
            name: "filterLevel",
            pure: !1
        })], o)
    },
    IFZK: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("4Wgh"),
            o = (n.n(i), n("/kyp"));
        n.d(t, "a", function() {
            return l
        });
        var r = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            s = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            l = function() {
                function e(e) {
                    this.tableService = e, this.customFilters = [], this.loading = !0, this.hasError = !1, this.errorMessage = "Unknown error has occurred"
                }
                return e.prototype.ngOnInit = function() {
                    this.initializeTable()
                }, e.prototype.ngOnChanges = function() {
                    this.initializeTable()
                }, e.prototype.initializeTable = function() {
                    var e = this;
                    this.loading = !0, this.hasError = !1, console.log("changed"), this.tableService.getSanitizedTableData(this.tableData, this.customFilters).subscribe(function(t) {
                        e.tableData = t, e.tableObjects = e.tableService.getTableObjects(e.tableData), e.loading = !1
                    }, function(t) {
                        e.loading = !1, e.hasError = !0, e.errorMessage = t.hasOwnProperty("message") ? t.message : t, console.log(e.errorMessage)
                    })
                }, e
            }();
        r([n.i(a.O)(), s("design:type", "function" == typeof(c = void 0 !== i.Visualization && i.Visualization) && c || Object)], l.prototype, "tableData", void 0), r([n.i(a.O)(), s("design:type", Array)], l.prototype, "customFilters", void 0), l = r([n.i(a._3)({
            selector: "app-table",
            template: n("yYqM"),
            styles: [n("pY5w")]
        }), s("design:paramtypes", ["function" == typeof(d = void 0 !== o.a && o.a) && d || Object])], l);
        var c, d
    },
    Iksp: function(e, t, n) {
        "use strict";
        var a = n("Qbdm"),
            i = n("3j3K"),
            o = n("NVOs"),
            r = n("Fzro"),
            s = n("KN8t"),
            l = n("YWx4"),
            c = n("WWmu"),
            d = n("98po"),
            p = n("5+/9"),
            u = n("nSQ8"),
            h = n("D59C"),
            g = n("DMg4"),
            f = n("gBZQ"),
            m = n("QweH"),
            y = n("+Cee"),
            v = n("zfxj"),
            b = n("0RIM"),
            _ = n("9ien"),
            x = n("wWpL"),
            w = n("a4ng"),
            A = n("1HCE"),
            O = n("LacQ"),
            E = n("aAWt"),
            D = n("c51d"),
            T = n("W3qg"),
            S = n("9GTs"),
            I = n("at7S"),
            k = n("IFZK"),
            R = n("/kyp"),
            j = n("j8YU"),
            F = n("rPc3"),
            C = n("lRnG"),
            P = n("Sv3W"),
            M = n("XRdi"),
            L = n("W4zo"),
            U = n("cl25"),
            N = n("rj5B"),
            B = n("MGYP"),
            G = n("atc/"),
            $ = n("TzTL"),
            z = n("SNFC"),
            Q = n("H8UP"),
            H = n("F5YQ"),
            Y = n("Ptc1"),
            W = n("GsWh"),
            V = n("uqvZ"),
            J = n("fV8N"),
            K = n("D9Xg"),
            Z = n("MgWG"),
            q = n("tFtT");
        n.d(t, "a", function() {
            return ee
        });
        var X = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            ee = function() {
                function e() {}
                return e
            }();
        ee = X([n.i(i.b)({
            declarations: [l.a, g.a, f.a, v.a, A.a, O.a, E.a, S.a, k.a, D.a, I.a, U.a, N.a, B.a, G.a, H.a, Q.a, Y.a, W.a, J.a, q.a],
            imports: [a.a, s.a, o.a, r.a, p.a, P.a, h.a.forRoot(), c.a.provideStore({
                uiState: b.a,
                storeData: _.a
            }, w.a), d.a.run(x.a)],
            providers: [u.a, $.a, m.a, y.a, T.a, R.a, F.a, C.a, j.a, M.a, L.a, z.a, K.a, V.a, Z.a],
            bootstrap: [l.a]
        })], ee)
    },
    KXcy: function(e, t) {
        e.exports = '<span appClickOutside (clickOutside)="showLayout = false">\n<a class="btn btn-default btn-sm" title="Favorites" (click)="showLayout = !showLayout;k = 1;">\n  <img src="assets/img/favorite.png" height="15"/>\n  Favorites\n  </a>\n<div style="position: absolute">\n  <div *ngIf="showLayout" class="layout-block" [ng2-draggable]="true" [ng2DraggableHandle]="elementreference">\n    <div #elementreference style="padding:6px;margin-bottom: 6px;border-bottom: 1px solid rgba(0,0,0,0.1); cursor: move">\n      <label>Favorites</label>\n      <button *ngIf="!newFavoriteArea && allDimensionAvailable"  class="pull-right btn-xs btn btn-default" (click)="enableAddFavorite();$event.stopPropagation()"><span class="glyphicon glyphicon-plus"></span> New</button>\n\n    </div>\n\n    <div >\n      <div class="col-sm-12" style="padding-left: 5px;padding-right: 5px">\n        <span *ngIf="savingSuccess" class="text-success">Favorite saved successful...</span>\n        <span *ngIf="savingFalure" class="text-danger">A problem occurs when saving  favorite, try again...</span>\n        <div class="col-sm-12" *ngIf="newFavoriteArea" style="padding:0px">\n          <textarea placeholder="Favorite name" class="form-control" [(ngModel)]="newFavName"></textarea>\n          <button style="margin-top: 4px;margin-bottom: 5px" class="btn btn-info btn-xs pull-right" (click)="addFavorite();$event.stopPropagation()" *ngIf="!saving" [disabled]="newFavName==\'\'">Save</button>\n            <span *ngIf="saving">Saving The favorite...</span>\n        </div>\n        \x3c!--favorites lists--\x3e\n        <ul class="list-unstyled">\n          <li *ngIf="loadingFavorite">\n            <img src="../../../assets/img/balls-5.svg">Loading favorites\n          </li>\n          <li *ngIf="!loadingFavorite && favorites.length == 0">There are no saved favorite</li>\n          <li *ngIf="!loadingFavorite">\n            <input type="text" class="form-control input-sm" [(ngModel)]="searchKey" placeholder="Search...">\n          </li>\n          <li class="fav-list" *ngFor="let favorite of favorites | filterByName:searchKey " style="padding: 7px;border-bottom: solid 1px rgba(0,0,0,0.1);">\n            <span *ngIf="!showEdit[favorite.id]" class="fav-name" (click)="openFavorite(favorite);$event.stopPropagation()"> {{ favorite.name }}</span>\n            \x3c!--textbox for editing in case editing is on--\x3e\n            <span *ngIf="showEdit[favorite.id]">\n              <textarea [(ngModel)]="editText" class="form-control"></textarea>\n            </span>\n            <span *ngIf="!showDelete[favorite.id] && !showEdit[favorite.id]" (click)="enableEdit(favorite);$event.stopPropagation()" class="glyphicon glyphicon-pencil pull-right text-primary butn" style="cursor: pointer" title="Update favorite"></span>\n            <span *ngIf="!showDelete[favorite.id] && !showEdit[favorite.id]" (click)="enableDelete(favorite);$event.stopPropagation()" class="glyphicon glyphicon-trash pull-right text-danger butn" style="cursor: pointer;padding-left: 5px;padding-right: 5px" title="Delete favorite"></span>\n            \x3c!--deleteng favorite--\x3e\n            <div class="pull-right" *ngIf="showDelete[favorite.id]">\n              <span class="text-success" *ngIf="deleteSuccess[favorite.id]">Favorite Deleted successful</span>\n              <span class="text-danger" *ngIf="deleteFalure[favorite.id]">Something went wrong when trying to delete favorite, try again</span>\n              <span *ngIf="deleting[favorite.id]">Deleting favorite...</span>\n              <span class="glyphicon glyphicon-check text-success butn" style="cursor: pointer" title="Delete" (click)="deleteFavorite(favorite);$event.stopPropagation()"><span></span>Delete</span>\n              <span class="glyphicon glyphicon-remove text-danger butn" style="cursor: pointer" title="Cancel" (click)="showDelete[favorite.id]=false;$event.stopPropagation()"><span></span>Cancel</span>\n            </div>\n            \x3c!--Editing favorite--\x3e\n            <div class="pull-right" *ngIf="showEdit[favorite.id]">\n              <span class="text-success" *ngIf="editSuccess[favorite.id]">Favorite Updated successful</span>\n              <span class="text-danger" *ngIf="editFalure[favorite.id]">Something went wrong when trying to update favorite, try again</span>\n              <span *ngIf="editing[favorite.id]">Updating favorite...</span>\n              <span class="glyphicon glyphicon-check text-success butn" style="cursor: pointer" title="Delete" (click)="editFavorite(favorite);$event.stopPropagation()"><span></span>Update</span>\n              <span class="glyphicon glyphicon-remove text-danger butn" style="cursor: pointer" title="Cancel" (click)="showEdit[favorite.id]=false;$event.stopPropagation()"><span></span>Cancel</span>\n            </div>\n          </li>\n        </ul>\n        \x3c!--<pagination-controls id =\'selectedlis\' maxSize="0" (pageChange)="k = $event;"></pagination-controls>--\x3e\n      </div>\n    </div>\n    <div class="col-sm-12">\n      <div class="pull-right">\n        <button class="btn btn-default btn-sm" (click)="showLayout= false"><i class="fa fa-times"></i>Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n</span>\n'
    },
    LEfX: function(e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "li{cursor:pointer}.selected{background-color:rgba(0,0,0,.1)}.tree-view{text-align:left;background-color:#fff;position:absolute;z-index:999;border:1px solid rgba(0,0,0,.15);border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175);width:98%;margin-right:30px;max-height:360px;overflow:auto;padding:10px 5px;margin-top:31px}.hiddenTree{display:none}.tree-area::-webkit-scrollbar{width:5px}.tree-area::-webkit-scrollbar-thumb,.tree-area::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.2);border-radius:10px}.tree-area{max-height:270px}.tree-area:hover{overflow:auto}.tree-area{max-height:210px;overflow:hidden;width:100%;overflow:auto}.tree-view::-webkit-scrollbar{width:5px}.tree-view::-webkit-scrollbar-thumb,.tree-view::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.2);border-radius:10px}.tree-view input{border-radius:2px;border:1px solid #ccc;height:26px;font-size:14px;width:100%;padding-left:7px;box-sizing:border-box;color:#888;margin:0 0 8px}.show_items{position:relative;float:left;display:inline-block;text-align:center;cursor:pointer;border:1px solid #c6c6c6;padding:4px 8px;font-size:14px;min-height:30px!important;border-radius:4px;color:#555;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;white-space:normal;background-color:#fff;background-image:linear-gradient(#fff,#f7f7f7);width:100%;height:30px}span.selected-item{background:inherit;border:1px solid #888;border-radius:3px;padding:3px 5px;margin-right:2px;cursor:text;font-size:11px}.selected-item-close{width:20px;cursor:pointer;font-weight:700;display:inline-block;padding:2px;text-align:center;font-size:xx-small}.removeitem{cursor:pointer}.removeitem:hover{font-size:1.1em}", ""]), e.exports = e.exports.toString()
    },
    LacQ: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return o
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = function() {
                function e() {}
                return e.prototype.transform = function(e, t) {
                    if (void 0 !== t && 0 !== e.length && null !== t) {
                        var n = t;
                        return [",", "[", "]", "(", ")", ",", ".", "-", "_"].forEach(function(e) {
                            n = n.split(e).join(" ")
                        }), e.filter(function(e) {
                            var t = !0;
                            return n.split(" ").forEach(function(n) {
                                -1 == e.name.toLowerCase().indexOf(n.toLowerCase()) && (t = !1)
                            }), t
                        })
                    }
                    return e
                }, e
            }();
        o = i([n.i(a.Y)({
            name: "filterByName"
        })], o)
    },
    MGYP: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return o
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = function() {
                function e() {}
                return e.prototype.transform = function(e, t) {
                    if (t) {
                        if ("TEXT" != t.valueType) {
                            if ("NaN" == e || isNaN(e)) return "";
                            if (null == e) return ""
                        }
                    } else {
                        if ("NaN" == e || isNaN(e)) return "";
                        if (null == e) return ""
                    }
                    return e
                }, e
            }();
        o = i([n.i(a.Y)({
            name: "removeNaN"
        })], o)
    },
    MOVZ: function(e, t) {
        function n(e) {
            throw new Error("Cannot find module '" + e + "'.")
        }
        n.keys = function() {
            return []
        }, n.resolve = n, e.exports = n, n.id = "MOVZ"
    },
    MgWG: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("M4fF");
        n.n(i);
        n.d(t, "a", function() {
            return s
        });
        var o = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            r = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            s = function() {
                function e() {}
                return e.prototype.drawChart = function(e, t) {
                    var n = this._sanitizeAnalyticsBasedOnConfiguration(this._standardizeIncomingAnalytics(e), t),
                        a = {
                            chart: this._getChartAttributeOptions(t),
                            title: this._getChartTitleObject(t),
                            subtitle: this._getChartSubtitleObject(t),
                            credits: this._getChartCreditsOptions(),
                            colors: this._getChartColors(),
                            plotOptions: this._getPlotOptions(t),
                            tooltip: this._getTooltipOptions(t),
                            exporting: this._getChartExportingOptions()
                        };
                    switch (t.type) {
                        case "radar":
                            a = this._extendSpiderWebChartOptions(a, n, t);
                            break;
                        case "solidgauge":
                            a = this._extendSolidGaugeChartOptions(a, n, t);
                            break;
                        case "gauge":
                            var o = i.clone(t);
                            o.type = "solidgauge", a = this._extendSolidGaugeChartOptions(a, n, o);
                            break;
                        case "pie":
                            a = this._extendPieChartOptions(a, n, t);
                            break;
                        case "combined":
                            console.log("combined");
                            break;
                        default:
                            a = this._extendOtherChartOptions(a, n, t)
                    }
                    return a
                }, e.prototype._extendSpiderWebChartOptions = function(e, t, n) {
                    var a = i.clone(e),
                        o = this._getAxisItems(t, n.yAxisType);
                    a.pane = i.assign({}, this._getPaneOptions(n.type)), a.yAxis = i.assign([], this._getYAxisOptions(n));
                    var r = this._getSortableSeries(this._getChartSeriesNew(t, this._getAxisItemsNew(t, n.xAxisType, !0), o, n), n.cumulativeValues ? -1 : n.sortOrder),
                        s = this._getRearrangedSeries(r, n.type);
                    return a.series = i.assign([], s), a.xAxis = this._getXAxisOptions(this._getRefinedXAxisCategories(a.series), n.type), a
                }, e.prototype._extendPieChartOptions = function(e, t, n) {
                    var a = i.clone(e),
                        o = this._getAxisItems(t, n.yAxisType),
                        r = this._getSortableSeries(this._getChartSeriesNew(t, this._getAxisItemsNew(t, n.xAxisType, !0), o, n), n.sortOrder);
                    return o.length > 1 ? (a.series = this._getDrilldownParentSeries(r, o, n.yAxisType), a.drilldown = {
                        series: r
                    }) : a.series = i.assign([], r), a
                }, e.prototype._getDrilldownParentSeries = function(e, t, n) {
                    var a = this;
                    return [{
                        name: "pe" === n ? "Period" : "dx" === n ? "Data" : "ou" === n ? "Organisation unit" : "Categories",
                        colorByPoint: !0,
                        data: i.map(t, function(t) {
                            return {
                                name: t.name,
                                drilldown: t.id,
                                y: a._deduceDrilldownParentDataFromChildrenSeries(e, t.id)
                            }
                        })
                    }]
                }, e.prototype._deduceDrilldownParentDataFromChildrenSeries = function(e, t) {
                    var n = 0,
                        a = i.find(e, ["id", t]);
                    return a && (n = i.reduce(i.map(a.data, function(e) {
                        return e.y
                    }), function(e, t) {
                        var n = isNaN(t) ? 0 : parseInt(t, 10);
                        return parseInt(e, 10) + n
                    })), n
                }, e.prototype._extendSolidGaugeChartOptions = function(e, t, n) {
                    var a = i.clone(e),
                        o = this._getAxisItems(t, n.yAxisType);
                    a.pane = this._getPaneOptions(n.type), a.yAxis = i.assign([], this._getYAxisOptions(n));
                    var r = this._getSortableSeries(this._getChartSeriesNew(t, this._getAxisItemsNew(t, n.xAxisType, !0), o, n), n.cumulativeValues ? -1 : n.sortOrder),
                        s = this._getRearrangedSeries(r, n.type);
                    return a.series = i.assign([], s), a
                }, e.prototype._extendOtherChartOptions = function(e, t, n) {
                    var a = i.clone(e),
                        o = this._getAxisItems(t, n.yAxisType);
                    a.yAxis = i.assign([], this._getYAxisOptions(n));
                    var r = this._getSortableSeries(this._getChartSeriesNew(t, this._getAxisItemsNew(t, n.xAxisType, !0), o, n), n.cumulativeValues ? -1 : n.sortOrder),
                        s = this._getRearrangedSeries(r, n.type),
                        l = this._updateSeriesWithAxisOptions(s, n.multiAxisTypes);
                    a.series = i.assign([], l), a.xAxis = this._getXAxisOptions(this._getRefinedXAxisCategoriesNew(a.series), n.type);
                    var c = i.filter(i.map(a.series, function(e) {
                        return e.data[0].color
                    }), function(e) {
                        return e
                    });
                    return c.length > 0 && (a.colors = c), a
                }, e.prototype._updateSeriesWithAxisOptions = function(e, t) {
                    return i.map(e, function(e) {
                        var n = i.clone(e),
                            a = i.find(t, ["id", n.id]);
                        return a && (n.yAxis = "left" === a.axis ? 0 : 1, n.type = "" !== a.type ? a.type : e.type, n.data = i.map(n.data, function(e) {
                            var t = i.clone(e);
                            return "" !== a.color && (t.color = a.color), t
                        })), n
                    })
                }, e.prototype._getRearrangedSeries = function(e, t) {
                    return e
                }, e.prototype._getRefinedXAxisCategoriesNew = function(e) {
                    var t = [];
                    if (e) {
                        var n = i.map(e, function(e) {
                            return e.data
                        });
                        if (n) {
                            var a = i.map(n, function(e) {
                                return i.map(e, function(e) {
                                    var t = e.name.split("_"),
                                        n = [];
                                    if (t) {
                                        var a = i.reverse(t);
                                        i.times(t.length, function(e) {
                                            if (0 === e) n.push({
                                                name: a[e]
                                            });
                                            else {
                                                var t = i.find(n, ["name", a[e - 1]]);
                                                if (t) {
                                                    var o = i.findIndex(n, t),
                                                        r = t.categories ? t.categories : [];
                                                    r = i.concat(r, a[e]), t.categories = i.assign([], r), n[o] = t
                                                }
                                            }
                                        })
                                    }
                                    return n[0]
                                })
                            });
                            if (a) {
                                var o = i.groupBy(a[0], "name"),
                                    r = i.keys(o),
                                    s = [];
                                i.forEach(r, function(e) {
                                    var t = i.filter(i.map(o[e], function(e) {
                                        return e.categories ? e.categories[0] : null
                                    }), function(e) {
                                        return null !== e
                                    });
                                    0 === t.length ? s.push({
                                        name: e
                                    }) : s.push({
                                        name: e,
                                        categories: t
                                    })
                                }), t = i.assign([], s)
                            }
                        }
                    }
                    return t
                }, e.prototype._getRefinedXAxisCategories = function(e) {
                    var t = [];
                    if (e) {
                        var n = i.map(e, function(e) {
                            return e.data
                        });
                        if (n) {
                            var a = i.map(n, function(e) {
                                return i.map(e, function(e) {
                                    return e.name
                                })
                            });
                            a && (t = i.assign([], a[0]))
                        }
                    }
                    return t
                }, e.prototype._getSortableSeries = function(e, t) {
                    var n = i.clone(e),
                        a = [];
                    return 1 === t ? n = i.map(e, function(e, t) {
                        var n = i.clone(e);
                        return 0 === t ? (n.data = i.assign([], i.reverse(i.sortBy(e.data, ["y"]))), a = i.map(n.data, function(e) {
                            return e.name
                        })) : a && (n.data = i.map(a, function(t) {
                            return i.find(e.data, ["name", t])
                        })), n
                    }) : -1 === t && (n = i.map(e, function(e, t) {
                        var n = i.clone(e);
                        return 0 === t ? (n.data = i.assign([], i.sortBy(e.data, ["y"])), a = i.map(n.data, function(e) {
                            return e.name
                        })) : a && (n.data = i.map(a, function(t) {
                            return i.find(e.data, ["name", t])
                        })), n
                    })), n
                }, e.prototype._getChartSeriesNew = function(e, t, n, a) {
                    var i = this,
                        o = [];
                    return n && n.forEach(function(n, r) {
                        o.push({
                            name: n.name,
                            id: n.id,
                            index: r,
                            turboThreshold: 0,
                            pointPlacement: "radar" === a.type ? "on" : void 0,
                            data: i._getSeriesDataNew(e, a, n.id, t),
                            type: i._getAllowedChartType(a.type)
                        })
                    }), o
                }, e.prototype._getSeriesDataNew = function(e, t, n, a) {
                    var o = this,
                        r = [],
                        s = i.findIndex(e.headers, i.find(e.headers, ["name", t.yAxisType])),
                        l = i.findIndex(e.headers, i.find(e.headers, ["name", "value"])),
                        c = i.map(t.xAxisType, function(t) {
                            return i.findIndex(e.headers, i.find(e.headers, ["name", t]))
                        }).join("_");
                    return a && a.forEach(function(a) {
                        var i = o._getSeriesValueNew(e.rows, s, n, c, a.id, l);
                        r.push({
                            id: a.id,
                            name: a.name,
                            dataLabels: o._getDataLabelsOptions(t),
                            y: i
                        })
                    }), r
                }, e.prototype._getChartSeries = function(e, t, n, a) {
                    var i = this,
                        o = [];
                    return n && n.forEach(function(n, r) {
                        o.push({
                            name: n.name,
                            id: n.id,
                            index: r,
                            turboThreshold: 0,
                            pointPlacement: "radar" === a.type ? "on" : void 0,
                            data: i._getSeriesData(e, a, n.id, t),
                            type: i._getAllowedChartType(a.type)
                        })
                    }), o
                }, e.prototype._getSeriesData = function(e, t, n, a) {
                    var o = this,
                        r = [],
                        s = i.findIndex(e.headers, i.find(e.headers, ["name", t.yAxisType]));
                    return a && a.forEach(function(a) {
                        var l = i.findIndex(e.headers, i.find(e.headers, ["name", t.xAxisType])),
                            c = i.findIndex(e.headers, i.find(e.headers, ["name", "value"])),
                            d = o._getSeriesValue(e.rows, s, n, l, a.id, c);
                        r.push({
                            id: a.id,
                            name: a.name,
                            dataLabels: o._getDataLabelsOptions(t),
                            y: d
                        })
                    }), r
                }, e.prototype._getSeriesValueNew = function(e, t, n, a, o, r) {
                    for (var s = null, l = function(e) {
                        var l = "";
                        if (i.forEach(a.split("_"), function(t) {
                                l += "" !== l ? "_" : "", l += e[t]
                            }), e[t] === n && l === o) return s = parseFloat(e[r]), "break"
                    }, c = 0, d = e; c < d.length; c++) {
                        if ("break" === l(d[c])) break
                    }
                    return s
                }, e.prototype._getSeriesValue = function(e, t, n, a, i, o) {
                    for (var r = null, s = 0, l = e; s < l.length; s++) {
                        var c = l[s];
                        if (c[t] === n && c[a] === i) {
                            r = parseFloat(c[o]);
                            break
                        }
                    }
                    return r
                }, e.prototype._getDataLabelsOptions = function(e) {
                    var t = null;
                    switch (e.type) {
                        case "pie":
                            t = {
                                enabled: e.showData,
                                format: "{point.name}<br/> <b>{point.y}</b> ( {point.percentage:.1f} % )"
                            };
                            break;
                        default:
                            t = {
                                enabled: e.showData
                            }
                    }
                    return t
                }, e.prototype._getAxisItemsNew = function(e, t, n) {
                    void 0 === n && (n = !1);
                    var a = [],
                        o = e.metaData.names,
                        r = e.metaData.dimensions;
                    return t.forEach(function(e, t) {
                        var n = r[e];
                        if (n)
                            if (t > 0) {
                                var s = i.assign([], a);
                                a = [], n.forEach(function(e) {
                                    s.forEach(function(t) {
                                        a.push({
                                            id: t.id + "_" + e,
                                            name: t.name + "_" + o[e].trim()
                                        })
                                    })
                                })
                            } else a = i.map(n, function(e) {
                                return {
                                    id: e,
                                    name: o[e].trim()
                                }
                            })
                    }), a
                }, e.prototype._getAxisItems = function(e, t, n) {
                    void 0 === n && (n = !1);
                    var a = [],
                        o = e.metaData.names,
                        r = e.metaData.dimensions,
                        s = r[t];
                    return s && (a = i.map(s, function(e) {
                        return {
                            id: e,
                            name: o[e]
                        }
                    })), a
                }, e.prototype._getChartTitleObject = function(e) {
                    return e.hideTitle ? null : {
                        text: e.title,
                        style: {
                            fontWeight: "600",
                            fontSize: "13px"
                        }
                    }
                }, e.prototype._getChartSubtitleObject = function(e) {
                    return e.hideSubtitle ? null : {
                        text: e.subtitle
                    }
                }, e.prototype._getChartCreditsOptions = function() {
                    return {
                        enabled: !1
                    }
                }, e.prototype._getChartColors = function() {
                    return ["#A9BE3B", "#558CC0", "#D34957", "#FF9F3A", "#968F8F", "#B7409F", "#FFDA64", "#4FBDAE", "#B78040", "#676767", "#6A33CF", "#4A7833", "#434348", "#7CB5EC", "#F7A35C", "#F15C80"]
                }, e.prototype._getChartExportingOptions = function() {
                    return {
                        buttons: {
                            contextButton: {
                                enabled: !1
                            }
                        }
                    }
                }, e.prototype._getChartLabelOptions = function(e) {
                    return {}
                }, e.prototype._getTooltipOptions = function(e) {
                    var t = this._getAllowedChartType(e.type),
                        n = {};
                    if (t) switch (t) {
                        case "solidgauge":
                            n = {
                                enabled: !1
                            };
                            break;
                        case "pie":
                            n = {
                                pointFormat: "{series.name}<br/> <b>{point.y}</b> ( {point.percentage:.1f} % )"
                            };
                            break;
                        default:
                            switch (e.type) {
                                case "stacked_column":
                                    n = {
                                        headerFormat: "<b>{point.x}</b><br/>",
                                        pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
                                    };
                                    break;
                                default:
                                    n = {
                                        enabled: !0
                                    }
                            }
                    }
                    return n
                }, e.prototype._getPlotOptions = function(e) {
                    var t = this._getAllowedChartType(e.type),
                        n = {};
                    if (t) switch (t) {
                        case "solidgauge":
                        case "gauge":
                            n[t] = {
                                dataLabels: {
                                    y: 5,
                                    borderWidth: 0,
                                    useHTML: !0
                                }
                            };
                            break;
                        case "pie":
                            n[t] = {
                                borderWidth: 0,
                                allowPointSelect: !0,
                                cursor: "pointer",
                                showInLegend: !e.hideLegend
                            };
                            break;
                        default:
                            n["" !== t ? t : "series"] = {
                                showInLegend: !e.hideLegend
                            }, "stacked_column" !== e.type && "stacked_bar" !== e.type && "area" !== e.type || (n[t].stacking = e.percentStackedValues ? "percent" : "normal")
                    }
                    return n
                }, e.prototype._getChartAttributeOptions = function(e) {
                    var t = {
                        renderTo: e.renderId,
                        type: this._getAllowedChartType(e.type)
                    };
                    return "pie" === e.type ? (t.plotBackgroundColor = null, t.plotBorderWidth = null, t.plotShadow = !1) : "radar" === e.type && (t.polar = !0), t
                }, e.prototype._getPaneOptions = function(e) {
                    var t = {};
                    switch (e) {
                        case "radar":
                            t = i.assign({}, {
                                size: "80%"
                            });
                            break;
                        default:
                            t = i.assign({}, {
                                center: ["50%", "85%"],
                                size: "140%",
                                startAngle: -90,
                                endAngle: 90,
                                background: {
                                    backgroundColor: "#EEE",
                                    innerRadius: "60%",
                                    outerRadius: "100%",
                                    shape: "arc"
                                }
                            })
                    }
                    return t
                }, e.prototype._getLegendOptions = function(e) {
                    return {
                        align: e.legendAlign,
                        reversed: e.reverseLegend,
                        layout: "right" === e.legendAlign || "left" === e.legendAlign ? "vertical" : "horizontal",
                        y: "top" === e.legendAlign ? 0 : "bottom" === e.legendAlign ? 25 : 0
                    }
                }, e.prototype._getXAxisOptions = function(e, t) {
                    var n = {};
                    switch (t) {
                        case "radar":
                            n = i.assign({}, {
                                categories: e,
                                tickmarkPlacement: "on",
                                lineWidth: 0
                            });
                            break;
                        default:
                            n = i.assign({}, {
                                categories: e,
                                labels: {
                                    rotation: e.length <= 5 ? 0 : -45,
                                    style: {
                                        color: "#000000",
                                        fontWeight: "normal"
                                    }
                                }
                            })
                    }
                    return n
                }, e.prototype._getYAxisOptions = function(e) {
                    var t = e.axes,
                        n = [];
                    return n = 0 === t.length ? i.assign([], [{
                        min: 0,
                        title: {
                            text: "",
                            style: {
                                color: "#000000",
                                fontWeight: "normal"
                            }
                        }
                    }]) : i.map(t, function(e, t) {
                        return {
                            min: 0,
                            title: {
                                text: e.name,
                                style: {
                                    color: "#000000",
                                    fontWeight: "normal"
                                }
                            },
                            opposite: "left" !== e.orientation
                        }
                    }), i.map(n, function(t) {
                        switch (e.type) {
                            case "radar":
                                t.gridLineInterpolation = "polygon", t.lineWidth = 0;
                                break;
                            case "solidgauge":
                                t.lineWidth = 0, t.labels = {
                                    y: 16
                                }, t.max = 100;
                                break;
                            case "stacked_column":
                                t.stackLabels = {
                                    enabled: !1,
                                    style: {
                                        fontWeight: "bold"
                                    }
                                };
                                break;
                            default:
                                t.labels = {
                                    style: {
                                        color: "#000000",
                                        fontWeight: "bold"
                                    }
                                }, t.plotLines = [{
                                    color: "#000000",
                                    dashStyle: "Solid",
                                    value: e.targetLineValue,
                                    width: 2,
                                    zIndex: 1e3,
                                    label: {
                                        text: e.targetLineLabel
                                    }
                                }, {
                                    color: "#000000",
                                    dashStyle: "Solid",
                                    value: e.baseLineValue,
                                    zIndex: 1e3,
                                    width: 2,
                                    label: {
                                        text: e.baseLineLabel
                                    }
                                }]
                        }
                        return t
                    })
                }, e.prototype._getAllowedChartType = function(e) {
                    var t = "";
                    switch (e) {
                        case "radar":
                            t = "line";
                            break;
                        default:
                            var n = e.split("_");
                            t = n.length > 1 ? n[1] : n[0]
                    }
                    return t
                }, e.prototype._sanitizeAnalyticsBasedOnConfiguration = function(e, t) {
                    var n = i.clone(e);
                    return t.cumulativeValues && (n = i.assign({}, this._mapAnalyticsToCumulativeFormat(e, t.xAxisType[0], t.yAxisType))), n
                }, e.prototype._mapAnalyticsToCumulativeFormat = function(e, t, n) {
                    var a = i.clone(e);
                    if (e) {
                        var o = e.metaData.dimensions[n],
                            r = i.reverse(e.metaData.dimensions[t]),
                            s = i.findIndex(e.headers, i.find(e.headers, ["name", n])),
                            l = i.findIndex(e.headers, i.find(e.headers, ["name", t])),
                            c = i.findIndex(e.headers, i.find(e.headers, ["name", "value"])),
                            d = [];
                        o.forEach(function(t) {
                            var n = 0;
                            r.forEach(function(a) {
                                e.rows.forEach(function(e) {
                                    if (e[s] === t && e[l] === a) {
                                        n += parseInt(e[c], 10);
                                        var o = i.clone(e);
                                        o[c] = n, d.push(o)
                                    }
                                })
                            })
                        }), a.rows = i.assign([], d)
                    }
                    return a
                }, e.prototype._standardizeIncomingAnalytics = function(e) {
                    var t = {
                        headers: [],
                        metaData: {
                            names: null,
                            dimensions: null
                        },
                        rows: []
                    };
                    if (e) {
                        if (e.headers && e.headers.forEach(function(e) {
                                try {
                                    var n = e;
                                    t.headers.push(n)
                                } catch (e) {
                                    console.warn("Invalid header object")
                                }
                            }), e.metaData) try {
                            var n = this._getSanitizedAnalyticsMetadata(e.metaData);
                            t.metaData = n
                        } catch (e) {
                            console.warn("Invalid metadata object")
                        }
                        e.rows && (t.rows = e.rows)
                    }
                    return t
                }, e.prototype._getSanitizedAnalyticsMetadata = function(e) {
                    var t = {
                        names: null,
                        dimensions: null
                    };
                    if (e) {
                        if (e.names) t.names = e.names;
                        else if (e.items) {
                            var n = i.keys(e.items),
                                a = {};
                            n && n.forEach(function(t) {
                                a[t] = e.items[t].name
                            }), t.names = a
                        }
                        if (e.dimensions) t.dimensions = e.dimensions;
                        else {
                            var o = i.keys(e),
                                r = {};
                            o && o.forEach(function(t) {
                                "names" !== t && (r[t] = e[t])
                            }), t.dimensions = r
                        }
                    }
                    return t
                }, e
            }();
        s = o([n.i(a.c)(), r("design:paramtypes", [])], s)
    },
    P2NJ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
            organisationUnits: [],
            dataElements: [],
            indicators: [],
            dataElementGroups: [],
            indicatorGroups: [],
            categoryOptions: [],
            dataSets: [],
            selectedOrgUnits: null,
            selectedPeriod: {
                items: [],
                type: "QuarterlyA",
                starting_year: (new Date).getFullYear(),
                name: "pe",
                value: null
            },
            selectedData: {
                auto_growing: [],
                need_functions: [],
                itemList: [],
                selectedData: {
                    items: null,
                    name: "dx",
                    value: null
                },
                hideQuarter: !1,
                hideMonth: !1
            },
            selectedDataItems: [],
            selectedGroup: {
                id: "ALL",
                name: "All Data [Select Table]"
            },
            tableObject: [],
            dataAnalytics: [],
            autoGrowingAnalytics: [],
            currentAnalytics: null,
            currentEmptyAnalytics: null,
            selectedPeriodType: "Monthly",
            selectedYear: (new Date).getFullYear(),
            currentGroupList: [],
            currentDataItemList: [],
            currentAnalyticsParams: "",
            dataOptions: [{
                name: "All Data",
                prefix: "ALL",
                selected: !0
            }, {
                name: "Data Elements",
                prefix: "de",
                selected: !1
            }, {
                name: "Computed",
                prefix: "in",
                selected: !1
            }, {
                name: "Submissions",
                prefix: "cv",
                selected: !1
            }, {
                name: "Auto Growing",
                prefix: "at",
                selected: !1
            }],
            dataSetGroups: [{
                id: "",
                name: "Reporting Rate"
            }, {
                id: ".REPORTING_RATE_ON_TIME",
                name: "Reporting Rate on time"
            }, {
                id: ".ACTUAL_REPORTS",
                name: "Actual Reports Submitted"
            }, {
                id: ".ACTUAL_REPORTS_ON_TIME",
                name: "Reports Submitted on time"
            }, {
                id: ".EXPECTED_REPORTS",
                name: "Expected Reports"
            }],
            layout: {
                rows: ["pe"],
                columns: ["dx"],
                filters: ["ou"],
                excluded: []
            },
            orgunit_model: {
                selection_mode: "Usr_orgUnit",
                selected_levels: [],
                show_update_button: !0,
                selected_groups: [],
                orgunit_levels: [],
                orgunit_groups: [],
                selected_orgunits: [],
                user_orgunits: [],
                type: "report",
                selected_user_orgunit: []
            },
            mapping: [],
            functions: [],
            options: {
                column_totals: !1,
                row_totals: !1,
                column_sub_total: !1,
                row_sub_total: !1,
                dimension_labels: !1,
                hide_empty_row: !1,
                show_hierarchy: !1,
                table_title: ""
            }
        }
    },
    P8dd: function(e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, ".tree-node-active>.node-content-wrapper{background:none!important;color:orange!important}.toggle-children{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);height:8px;width:9px;background-size:contain;display:inline-block;position:relative;background-repeat:no-repeat;background-position:50%}.tree-node-expanded>.toggle-children-wrapper>.toggle-children{-webkit-transform:rotate(0deg)!important;transform:rotate(0deg)!important;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysTqXJGKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADdJREFUeNpjbGhoYMABWIC4vr4eU6KxsZGJATfAJ8cCoRgZGZFF////j5CDcEgwk5B9QOdilQMArx0MGrXJqC8AAAAASUVORK5CYII=)}.tree-node-collapsed>.toggle-children-wrapper>.toggle-children{-webkit-transform:rotate(0deg);transform:rotate(0deg);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC)}.tree-node-active.tree-node-focused>.node-content-wrapper{background:none!important;color:orange!important;font-weight:700}.node-content-wrapper:hover,.tree-node-active>.node-content-wrapper,.tree-node-focused>.node-content-wrapper{box-shadow:none!important}.show_items{position:relative;float:left;display:inline-block;text-align:center;border:1px solid #c6c6c6;padding:4px 2px;font-size:12px;min-height:20px!important;border-radius:4px;color:#555;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;white-space:normal;background-image:linear-gradient(#fff,#f7f7f7);width:100%;margin-top:2px;height:26px}.show_items,.show_items small,.show_items span{cursor:pointer}.show_tops{position:relative;float:left;display:inline-block;text-align:center;border:1px solid #c6c6c6;font-size:14px;min-height:38px!important;border-radius:4px;color:#555;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;white-space:normal;background-color:#fff;background-image:linear-gradient(#fff,#f7f7f7);width:7%;height:34px}.arrows:hover{-webkit-transform:scale(1.001);transform:scale(1.001);box-shadow:0 0 10px rgba(0,0,0,.1);background-color:rgba(0,0,0,.05)}.tree-view{z-index:1000;min-width:370px;margin-right:30px;max-height:360px;margin-top:30px}.additional-options,.tree-view{text-align:left;background-color:#fff;position:absolute;border:1px solid rgba(0,0,0,.15);border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175);overflow:auto;padding:10px 5px}.additional-options{z-index:999;min-width:420px;margin-right:13px;max-height:400px;margin-top:38px;right:0}.scorecard_table{margin-bottom:3px;font-size:9px;border:1px solid #ddd;border-spacing:0;border-collapse:collapse;display:table}.pointer label{cursor:pointer}.tree-area{max-height:270px;min-height:270px;overflow:hidden;overflow:auto}.tree-area,.tree-area1{max-height:210px;width:100%}.tree-area1{overflow:hidden}.tree-area1:hover{overflow:auto}.hiddenTree{display:none}.tree-area::-webkit-scrollbar{width:5px}.tree-area::-webkit-scrollbar-thumb,.tree-area::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.2);border-radius:10px}.tree-area1::-webkit-scrollbar{width:5px}.tree-area1::-webkit-scrollbar-thumb,.tree-area1::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.2);border-radius:10px}.tree-view::-webkit-scrollbar{width:5px}.tree-view::-webkit-scrollbar-thumb,.tree-view::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.2);border-radius:10px}.tree-view input{border-radius:2px;border:1px solid #ccc;height:26px;font-size:14px;width:100%;padding-left:7px;box-sizing:border-box;color:#888;margin:0 0 8px}span.selected-item{background:inherit;border:1px solid #ececec;border-radius:3px;padding:3px 5px;margin-right:2px;cursor:text;font-size:11px}.selected-item-close{width:20px;cursor:pointer;font-weight:700;display:inline-block;padding:2px;text-align:center;font-size:xx-small}#tree_view .tree-node-active>.node-content-wrapper{background:none!important;color:orange!important}#tree_view .toggle-children{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);height:8px;width:9px;background-size:contain;display:inline-block;position:relative;background-repeat:no-repeat;background-position:50%}#tree_view .tree-node-expanded>.toggle-children-wrapper>.toggle-children{-webkit-transform:rotate(0deg)!important;transform:rotate(0deg)!important;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysTqXJGKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADdJREFUeNpjbGhoYMABWIC4vr4eU6KxsZGJATfAJ8cCoRgZGZFF////j5CDcEgwk5B9QOdilQMArx0MGrXJqC8AAAAASUVORK5CYII=)}#tree_view .tree-node-collapsed>.toggle-children-wrapper>.toggle-children{-webkit-transform:rotate(0deg);transform:rotate(0deg);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC)}#tree_view .tree-node-active.tree-node-focused>.node-content-wrapper{background:none!important;color:orange!important;font-weight:700}#tree_view .tree-node-active>.node-content-wrapper,.node-content-wrapper:hover,.tree-node-focused>.node-content-wrapper{box-shadow:none!important}.close-area{border-top:1px solid #ffebcd;padding-top:5px}@media print{.no-print,.no-print *{display:none}.orgUnitName{min-width:130px;height:35px;max-height:35px;font-size:9px}.legendItem{width:200px;float:left}}.indicator_details{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0;transition:opacity .15s linear;background-color:rgba(0,0,0,.4)}.indicator_dialog{width:86%;margin:100px 7% auto}.indicator-content{box-shadow:0 5px 15px rgba(0,0,0,.5);position:relative;background-color:#fff;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;min-height:200px;padding:10px}.hide_no_group{display:none}table *{line-height:80%}.indicator_title,.subtotal{width:90px;max-width:90px}.indicator_title{font-size:10px;overflow-wrap:break-word;cursor:pointer;line-height:140%}.list-group-item{padding:5px 15px}.removeorgunit{cursor:pointer;border:1px solid rgba(95,158,160,.26);padding-left:2px;padding-right:2px}.someclass{color:rgba(0,0,0,.1);background-color:rgba(0,0,0,.1)}.node-content-wrapper-focused{background-color:#fff!important}.group-image{height:15px}", ""]), e.exports = e.exports.toString()
    },
    PVdj: function(e, t, n) {
        "use strict";
        n.d(t, "r", function() {
            return a
        }), n.d(t, "d", function() {
            return i
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "g", function() {
            return r
        }), n.d(t, "q", function() {
            return s
        }), n.d(t, "h", function() {
            return l
        }), n.d(t, "i", function() {
            return c
        }), n.d(t, "k", function() {
            return d
        }), n.d(t, "j", function() {
            return p
        }), n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, "c", function() {
            return f
        }), n.d(t, "m", function() {
            return m
        }), n.d(t, "n", function() {
            return y
        }), n.d(t, "l", function() {
            return v
        }), n.d(t, "o", function() {
            return b
        }), n.d(t, "p", function() {
            return _
        }), n.d(t, "s", function() {
            return x
        }), n.d(t, "t", function() {
            return w
        }), n.d(t, "f", function() {
            return A
        }), n.d(t, "B", function() {
            return O
        }), n.d(t, "E", function() {
            return E
        }), n.d(t, "y", function() {
            return D
        }), n.d(t, "v", function() {
            return T
        }), n.d(t, "u", function() {
            return S
        }), n.d(t, "C", function() {
            return I
        }), n.d(t, "D", function() {
            return k
        }), n.d(t, "A", function() {
            return R
        }), n.d(t, "x", function() {
            return j
        }), n.d(t, "z", function() {
            return F
        }), n.d(t, "w", function() {
            return C
        });
        var a = "TOGGLE_DATA_AREA_ACTION",
            i = "SELECT_GROUP_ACTION",
            o = "SELECT_DATA_ACTION",
            r = "SELECT_PERIOD_ACTION",
            s = "SELECT_ORGANISATION_UNIT_ACTION",
            l = "SET_LAYOUT_ACTION",
            c = "SET_ORGANISATION_MODEL_ACTION",
            d = "SET_YEAR_ACTION",
            p = "SET_PERIOD_TYPE_ACTION",
            u = "ADD_DATA_ANALYITICS",
            h = "ADD_EMPTY_ANALYITICS",
            g = "ADD_SINGLE_EMPTY_ANALYITICS",
            f = "ADD_SINGLE_AUTOGROWING_ANALYITICS",
            m = "ADD_FUNCTIONS",
            y = "UPDATE_TABLE_ACTION",
            v = "ADD_FUNCTION_MAPPING",
            b = "UPDATE_OPTIONS_ACTION",
            _ = "RESET_TABLE_OBJECTS_ACTION",
            x = "SEND_NORMAL_DATA_LOADING_MESSAGE",
            w = "REMOVE_NORMAL_DATA_LOADING_MESSAGE",
            A = "UPDATE_CURRENT_ANALYTICS_OPTIONS_ACTION",
            O = (function() {
                function e(e) {
                    this.payload = e, this.type = u
                }
            }(), function() {
                function e(e) {
                    this.payload = e, this.type = b
                }
                return e
            }()),
            E = function() {
                function e(e) {
                    this.payload = e, this.type = A
                }
                return e
            }(),
            D = function() {
                function e(e) {
                    this.payload = e, this.type = x
                }
                return e
            }(),
            T = (function() {
                function e(e) {
                    this.payload = e, this.type = w
                }
            }(), function() {
                function e() {
                    this.type = _
                }
            }(), function() {
                function e(e) {
                    this.payload = e, this.type = y
                }
            }(), function() {
                function e(e) {
                    this.payload = e, this.type = h
                }
            }(), function() {
                function e(e) {
                    this.payload = e, this.type = m
                }
                return e
            }()),
            S = function() {
                function e(e) {
                    this.payload = e, this.type = v
                }
                return e
            }(),
            I = (function() {
                function e(e) {
                    this.payload = e, this.type = g
                }
            }(), function() {
                function e(e) {
                    this.payload = e, this.type = f
                }
            }(), function() {
                function e() {
                    this.type = a
                }
                return e
            }()),
            k = (function() {
                function e(e) {
                    this.payload = e, this.type = i
                }
            }(), function() {
                function e(e) {
                    this.payload = e, this.type = o
                }
                return e
            }()),
            R = function() {
                function e(e) {
                    this.payload = e, this.type = l
                }
                return e
            }(),
            j = function() {
                function e(e) {
                    this.payload = e, this.type = c
                }
                return e
            }(),
            F = (function() {
                function e(e) {
                    this.payload = e, this.type = d
                }
            }(), function() {
                function e(e) {
                    this.payload = e, this.type = p
                }
            }(), function() {
                function e(e) {
                    this.payload = e, this.type = r
                }
                return e
            }()),
            C = function() {
                function e(e) {
                    this.payload = e, this.type = s
                }
                return e
            }()
    },
    PcLq: function(e, t) {
        e.exports = '<div id="chart_area" class="chart-block" [ngStyle]="{\'width\': \'100%\', height: \'90vh\'}"></div>\n<div class="options-block" *ngIf="showOptions">\n  <ul class="nav nav-stacked">\n    <li *ngFor="let chartType of chartTypes">\n      <a\n        (click)="updateChartType(chartType.type)"\n        title="{{chartType.description}}"\n        [ngClass]="{\'active-type\' : currentChartType == chartType.type}"\n      >\n        <img [src]="chartType.icon" class="chart-option-icon" alt="">\n      </a>\n    </li>\n  </ul>\n</div>\n'
    },
    Ptc1: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("Gvdl"),
            o = (n.n(i), n("W4zo"));
        n.d(t, "a", function() {
            return l
        });
        var r = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            s = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            l = function() {
                function e(e) {
                    this.http = e, this.showLayout = !1, this.favorites = [], this.newFavoriteArea = !1, this.loadingFavorite = !0, this.dataDimensions = {}, this.options = {}, this.layout = {}, this.allDimensionAvailable = !1, this.onFavoriteSelect = new a.F, this.newFavName = "", this.searchKey = "", this.showDelete = [], this.deleting = [], this.deleteSuccess = [], this.deleteFalure = [], this.showEdit = [], this.editing = [], this.editSuccess = [], this.editFalure = [], this.k = 1, this.saving = !1, this.savingSuccess = !1, this.savingFalure = !1, this.editText = ""
                }
                return e.prototype.ngOnInit = function() {
                    this.loadFavorites()
                }, e.prototype.loadFavorites = function() {
                    var e = this;
                    this.getAllFavorite().subscribe(function(t) {
                        e.favorites = t, e.loadingFavorite = !1
                    }, function(t) {
                        console.log(t), e.loadingFavorite = !1
                    })
                }, e.prototype.openFavorite = function(e) {
                    this.onFavoriteSelect.emit(e), this.showLayout = !1, this.k = 1
                }, e.prototype.addFavorite = function() {
                    var e = this,
                        t = {
                            id: this.makeid(),
                            name: this.newFavName,
                            dataDimensions: this.dataDimensions,
                            options: this.options,
                            layout: this.layout
                        };
                    this.saving = !0, this.saveMapping(t.id, t).subscribe(function(t) {
                        e.saving = !1, e.favorites.push(t), e.savingSuccess = !0, e.newFavoriteArea = !1, e.newFavName = "", setTimeout(function() {
                            e.savingSuccess = !1
                        }, 2e3)
                    }, function(t) {
                        e.savingFalure = !0, e.saving = !1, setTimeout(function() {
                            e.savingFalure = !1
                        }, 3e3)
                    })
                }, e.prototype.enableAddFavorite = function() {
                    this.newFavoriteArea = !0
                }, e.prototype.enableEdit = function(e) {
                    this.editText = e.name, this.showEdit = [], this.showEdit[e.id] = !0
                }, e.prototype.enableDelete = function(e) {
                    this.showDelete = [], this.showDelete[e.id] = !0
                }, e.prototype.deleteFavorite = function(e) {
                    var t = this;
                    this.deleting[e.id] = !0, this.deleteMapping(e.id, e).subscribe(function(n) {
                        t.loadFavorites(), t.deleteSuccess[e.id] = !0, setTimeout(function() {
                            t.deleteSuccess[e.id] = !1
                        }, 2e3), t.deleting[e.id] = !1
                    }, function(n) {
                        t.deleteFalure[e.id] = !0, setTimeout(function() {
                            t.deleteFalure[e.id] = !1
                        }, 3e3), t.deleting[e.id] = !1
                    })
                }, e.prototype.editFavorite = function(e) {
                    var t = this;
                    this.editing[e.id] = !0, e.name = this.editText, this.updateMapping(e.id, e).subscribe(function(n) {
                        t.editSuccess[e.id] = !0, t.favorites.splice(t.favorites.indexOf(e), 1, n), setTimeout(function() {
                            t.editSuccess[e.id] = !1
                        }, 2e3), t.editing[e.id] = !1, t.showEdit[e.id] = !1
                    }, function(n) {
                        t.editFalure[e.id] = !0, setTimeout(function() {
                            t.editFalure[e.id] = !1
                        }, 3e3), t.deleting[e.id] = !1, t.showEdit[e.id] = !1
                    })
                }, e.prototype.makeid = function() {
                    for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < 11; n++) e += t.charAt(Math.floor(Math.random() * t.length));
                    return e
                }, e.prototype.getAllFavorite = function() {
                    var e = this;
                    return new i.Observable(function(t) {
                        e.http.get("dataStore/pivotFavorite").subscribe(function(n) {
                            var a = [];
                            n.forEach(function(t) {
                                a.push(e.http.get("dataStore/pivotFavorite/" + t))
                            }), i.Observable.forkJoin(a).subscribe(function(e) {
                                var n = [];
                                e.forEach(function(e, t) {
                                    n.push(e)
                                }), t.next(n), t.complete()
                            }, function(e) {
                                t.error()
                            })
                        }, function(e) {
                            t.error()
                        })
                    })
                }, e.prototype.saveMapping = function(e, t) {
                    var n = this;
                    return new i.Observable(function(a) {
                        n.http.post("dataStore/pivotFavorite/" + e, t).subscribe(function(e) {
                            a.next(t), a.complete()
                        }, function(e) {
                            console.log("something went wrong while adding mapping"), a.error("something went wrong while adding mapping")
                        })
                    })
                }, e.prototype.updateMapping = function(e, t) {
                    var n = this;
                    return new i.Observable(function(a) {
                        n.http.put("dataStore/pivotFavorite/" + e, t).subscribe(function(e) {
                            a.next(t), a.complete()
                        }, function(e) {
                            a.error("something went wrong while adding mapping")
                        })
                    })
                }, e.prototype.deleteMapping = function(e, t) {
                    var n = this;
                    return new i.Observable(function(a) {
                        n.http.delete("dataStore/pivotFavorite/" + e).subscribe(function(e) {
                            a.next(t), a.complete()
                        }, function(e) {
                            a.error("something went wrong while adding mapping")
                        })
                    })
                }, e
            }();
        r([n.i(a.O)(), s("design:type", Object)], l.prototype, "dataDimensions", void 0), r([n.i(a.O)(), s("design:type", Object)], l.prototype, "options", void 0), r([n.i(a.O)(), s("design:type", Object)], l.prototype, "layout", void 0), r([n.i(a.O)(), s("design:type", Boolean)], l.prototype, "allDimensionAvailable", void 0), r([n.i(a._2)(), s("design:type", Object)], l.prototype, "onFavoriteSelect", void 0), l = r([n.i(a._3)({
            selector: "app-favorite",
            template: n("KXcy"),
            styles: [n("4dEB")]
        }), s("design:paramtypes", ["function" == typeof(c = void 0 !== o.a && o.a) && c || Object])], l);
        var c
    },
    QOa8: function(e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, ".layout-block{padding:10px;position:absolute;border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175);background-color:#fff;border:1px solid rgba(0,0,0,.15);height:auto;overflow:hidden;min-width:260px;width:260px;z-index:1000;padding-bottom:5px;margin-top:2px}label{font-weight:200}p{margin-bottom:0}.options-toggle-btn{transition:all .2s ease-in-out;margin-top:2px;border-radius:20px}.options-toggle-btn:hover{-webkit-transform:scale(1.1);transform:scale(1.1);background-color:#e0ecfc}", ""]), e.exports = e.exports.toString()
    },
    Qd5h: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return r
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            r = function() {
                function e(e, t) {
                    this.utils = new s, this.dbWrapper = new l(e, t)
                }
                return e.prototype.createStore = function(e, t) {
                    var n = this,
                        a = this;
                    return new Promise(function(i, o) {
                        n.dbWrapper.dbVersion = e;
                        var r = n.utils.indexedDB.open(n.dbWrapper.dbName, e);
                        r.onsuccess = function(e) {
                            a.dbWrapper.db = r.result, i()
                        }, r.onerror = function(e) {
                            o("IndexedDB error: " + e.target.errorCode)
                        }, r.onupgradeneeded = function(e) {
                            t(e, a.dbWrapper.db)
                        }
                    })
                }, e.prototype.getByKey = function(e, t) {
                    var n = this;
                    return new Promise(function(a, i) {
                        n.dbWrapper.validateBeforeTransaction(e, i);
                        var o, r = n.dbWrapper.createTransaction({
                                storeName: e,
                                dbMode: n.utils.dbMode.readOnly,
                                error: function(e) {
                                    i(e)
                                },
                                complete: function(e) {}
                            }),
                            s = r.objectStore(e);
                        o = s.get(t), o.onsuccess = function(e) {
                            a(e.target.result)
                        }
                    })
                }, e.prototype.getByKeys = function(e, t) {
                    var n = this,
                        a = this;
                    return new Promise(function(i, o) {
                        a.dbWrapper.validateBeforeTransaction(e, o);
                        var r = a.dbWrapper.createTransaction({
                                storeName: e,
                                dbMode: a.utils.dbMode.readOnly,
                                error: function(e) {
                                    o(e)
                                },
                                complete: function(e) {}
                            }),
                            s = r.objectStore(e),
                            l = {};
                        t.forEach(function(e) {
                            l[e] = !1
                        });
                        var c = [];
                        t.forEach(n.fetchKey(s, function(e, n) {
                            l[n] = !0, c.push(e);
                            var a = !0;
                            t.forEach(function(e) {
                                l[e] || (a = !1)
                            }), a && i(c)
                        }));
                        var d = !0;
                        t.forEach(function(e) {
                            l[e] || (d = !1)
                        }), d && i(c)
                    })
                }, e.prototype.fetchKey = function(e, t) {
                    return function(n) {
                        e.get(n).onsuccess = function(e) {
                            t(e.target.result, n)
                        }
                    }
                }, e.prototype.getAll = function(e, t, n) {
                    var a = this;
                    return new Promise(function(i, o) {
                        a.dbWrapper.validateBeforeTransaction(e, o);
                        var r, s = a.dbWrapper.createTransaction({
                                storeName: e,
                                dbMode: a.utils.dbMode.readOnly,
                                error: function(e) {
                                    o(e)
                                },
                                complete: function(e) {}
                            }),
                            l = s.objectStore(e),
                            c = [];
                        if (n) {
                            var d = l.index(n.indexName),
                                p = "desc" === n.order ? "prev" : "next";
                            r = d.openCursor(t, p)
                        } else r = l.openCursor(t);
                        r.onerror = function(e) {
                            o(e)
                        }, r.onsuccess = function(e) {
                            var t = e.target.result;
                            t ? (c.push(t.value), t.continue()) : i(c)
                        }
                    })
                }, e.prototype.add = function(e, t, n) {
                    var a = this;
                    return new Promise(function(i, o) {
                        a.dbWrapper.validateBeforeTransaction(e, o), a.dbWrapper.createTransaction({
                            storeName: e,
                            dbMode: a.utils.dbMode.readWrite,
                            error: function(e) {
                                o(e)
                            },
                            complete: function(e) {
                                i({
                                    key: n,
                                    value: t
                                })
                            }
                        }).objectStore(e).add(t, n)
                    })
                }, e.prototype.update = function(e, t, n) {
                    var a = this;
                    return new Promise(function(i, o) {
                        a.dbWrapper.validateBeforeTransaction(e, o), a.dbWrapper.createTransaction({
                            storeName: e,
                            dbMode: a.utils.dbMode.readWrite,
                            error: function(e) {
                                o(e)
                            },
                            complete: function(e) {
                                i(t)
                            },
                            abort: function(e) {
                                o(e)
                            }
                        }).objectStore(e).put(t, n)
                    })
                }, e.prototype.delete = function(e, t) {
                    var n = this;
                    return new Promise(function(a, i) {
                        n.dbWrapper.validateBeforeTransaction(e, i), n.dbWrapper.createTransaction({
                            storeName: e,
                            dbMode: n.utils.dbMode.readWrite,
                            error: function(e) {
                                i(e)
                            },
                            complete: function(e) {
                                a()
                            },
                            abort: function(e) {
                                i(e)
                            }
                        }).objectStore(e).delete(t)
                    })
                }, e.prototype.openCursor = function(e, t, n) {
                    var a = this;
                    return new Promise(function(i, o) {
                        a.dbWrapper.validateBeforeTransaction(e, o), a.dbWrapper.createTransaction({
                            storeName: e,
                            dbMode: a.utils.dbMode.readOnly,
                            error: function(e) {
                                o(e)
                            },
                            complete: function(e) {
                                i()
                            },
                            abort: function(e) {
                                o(e)
                            }
                        }).objectStore(e).openCursor(n).onsuccess = function(e) {
                            t(e), i()
                        }
                    })
                }, e.prototype.clear = function(e) {
                    var t = this;
                    return new Promise(function(n, a) {
                        t.dbWrapper.validateBeforeTransaction(e, a), t.dbWrapper.createTransaction({
                            storeName: e,
                            dbMode: t.utils.dbMode.readWrite,
                            error: function(e) {
                                a(e)
                            },
                            complete: function(e) {
                                n()
                            },
                            abort: function(e) {
                                a(e)
                            }
                        }).objectStore(e).clear(), n()
                    })
                }, e.prototype.getByIndex = function(e, t, n) {
                    var a = this;
                    return new Promise(function(i, o) {
                        a.dbWrapper.validateBeforeTransaction(e, o), a.dbWrapper.createTransaction({
                            storeName: e,
                            dbMode: a.utils.dbMode.readOnly,
                            error: function(e) {
                                o(e)
                            },
                            abort: function(e) {
                                o(e)
                            },
                            complete: function(e) {}
                        }).objectStore(e).index(t).get(n).onsuccess = function(e) {
                            i(e.target.result)
                        }
                    })
                }, e
            }();
        r = i([n.i(a.c)(), o("design:paramtypes", [String, Number])], r);
        var s = function() {
                function e() {
                    this.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB, this.dbMode = {
                        readOnly: "readonly",
                        readWrite: "readwrite"
                    }
                }
                return e
            }(),
            l = function() {
                function e(e, t) {
                    this.dbName = e, this.dbVersion = t || 1, this.db = null
                }
                return e.prototype.validateStoreName = function(e) {
                    return this.db.objectStoreNames.contains(e)
                }, e.prototype.validateBeforeTransaction = function(e, t) {
                    this.db || t("You need to use the createStore function to create a database before you query it!"), this.validateStoreName(e) || t("objectStore does not exists: " + e)
                }, e.prototype.createTransaction = function(e) {
                    var t = this.db.transaction(e.storeName, e.dbMode);
                    return t.onerror = e.error, t.oncomplete = e.complete, t.onabort = e.abort, t
                }, e
            }()
    },
    QweH: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("Gvdl"),
            o = (n.n(i), n("Qd5h"));
        n.d(t, "c", function() {
            return l
        }), n.d(t, "g", function() {
            return c
        }), n.d(t, "b", function() {
            return d
        }), n.d(t, "d", function() {
            return p
        }), n.d(t, "h", function() {
            return u
        }), n.d(t, "f", function() {
            return h
        }), n.d(t, "e", function() {
            return g
        }), n.d(t, "i", function() {
            return f
        }), n.d(t, "a", function() {
            return m
        });
        var r = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            s = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            l = "data-elements",
            c = "data-sets",
            d = "organisation-units",
            p = "indicators",
            u = "category-options",
            h = "data-element-groups",
            g = "indicator-groups",
            f = "programs",
            m = function() {
                function e() {
                    this.db = new o.a("dhis2metadata", 1)
                }
                return e.prototype._initiateStoreObjects = function() {
                    var e = this;
                    return this.db.createStore(2, function(t) {
                        e.createStore(t, l, "id"), e.createStore(t, p, "id"), e.createStore(t, u, "id"), e.createStore(t, d, "id"), e.createStore(t, h, "id"), e.createStore(t, g, "id"), e.createStore(t, c, "id"), e.createStore(t, f, "id")
                    })
                }, e.prototype.createStore = function(e, t, n) {
                    e.currentTarget.result.createObjectStore(t, {
                        keyPath: n
                    }).createIndex(n, n, {
                        unique: !1
                    })
                }, e.prototype.add = function(e, t) {
                    var n = this;
                    return i.Observable.create(function(a) {
                        n._initiateStoreObjects().then(function() {
                            n.db.add(e, t).then(function() {
                                a.next(t), a.complete()
                            }, function(e) {
                                console.log("an error occuers"), a.error(e)
                            })
                        })
                    })
                }, e.prototype.update = function(e, t) {
                    var n = this;
                    return i.Observable.create(function(a) {
                        n._initiateStoreObjects().then(function() {
                            n.db.update(e, t).then(function() {
                                a.next(t), a.complete()
                            }, function(e) {
                                console.log(e)
                            })
                        })
                    })
                }, e.prototype.getByIndex = function(e, t, n) {
                    var a = this;
                    return i.Observable.create(function(i) {
                        a._initiateStoreObjects().then(function() {
                            a.db.getByIndex(e, t, n).then(function(e) {
                                i.next(e), i.complete()
                            }, function(e) {
                                i.error(e)
                            })
                        })
                    })
                }, e.prototype.getByKey = function(e, t) {
                    var n = this;
                    return i.Observable.create(function(a) {
                        n._initiateStoreObjects().then(function() {
                            n.db.getByKey(e, t).then(function(e) {
                                a.next(e), a.complete()
                            }, function(e) {
                                a.error(e)
                            })
                        })
                    })
                }, e.prototype.getByKeys = function(e, t) {
                    var n = this;
                    return i.Observable.create(function(a) {
                        n._initiateStoreObjects().then(function() {
                            n.db.getByKeys(e, t).then(function(e) {
                                a.next(e), a.complete()
                            }, function(e) {
                                a.error(e)
                            })
                        })
                    })
                }, e.prototype.getAll = function(e) {
                    var t = this;
                    return i.Observable.create(function(n) {
                        t._initiateStoreObjects().then(function() {
                            t.db.getAll(e).then(function(e) {
                                n.next(e), n.complete()
                            }, function(e) {
                                n.error(e)
                            })
                        })
                    })
                }, e.prototype.clearAll = function(e) {
                    var t = this;
                    return i.Observable.create(function(n) {
                        t._initiateStoreObjects().then(function() {
                            t.db.clear(e).then(function() {
                                n.next("Values cleared"), n.complete()
                            }, function(e) {
                                n.error(e)
                            })
                        })
                    })
                }, e.prototype.delete = function(e, t) {
                    var n = this;
                    return i.Observable.create(function(a) {
                        n._initiateStoreObjects().then(function() {
                            n.db.remove(e, t).then(function() {
                                a.next(t + "Values cleared"), a.complete()
                            }, function(e) {
                                a.error(e)
                            })
                        })
                    })
                }, e
            }();
        m = r([n.i(a.c)(), s("design:paramtypes", [])], m)
    },
    "R/Vl": function(e, t) {
        e.exports = '<div class="panel panel-default" style="border-style: none; margin-bottom: 0px; margin-top: 0px; border-bottom: solid 1px #eee;">\n  \x3c!--<div class="panel-heading" style="background-color: #ffffff;padding-bottom: 2px;padding-top: 5px">--\x3e\n    \x3c!--Period--\x3e\n  \x3c!--</div>--\x3e\n  <div class="panel-body" style="margin: 3px; border: 1px solid rgba(0,0,0,0.1);padding: 0px" [ngClass]="{\'hiddenTree\':showPerTree}">\n    <div style="padding: 3px">\n      <div  class="container-fluid" style="border-bottom: 1px solid rgba(0,0,0,0.1); padding: 0px">\n        <div class="col-sm-6" style="padding-left:3px; margin-bottom: 5px">\n          <select id="periodType" [(ngModel)]="period_type" class="form-control input-sm" style="height: 25px; padding-left: 1px " (change)="updatePeriodType()">\n            <option value="" disabled="disabled" selected="selected">Select period type</option>\n            <option  [value]="\'QuarterlyA\'" [hidden]="hideMonth">Quarter Group A</option>\n            <option  [value]="\'QuarterlyB\'" [hidden]="hideQuarter">Quarter Group B</option>\n            \x3c!--<option  [value]="\'Yearly\'" >Yearly</option>--\x3e\n            <option  [value]="\'QuarterlyC\'" >Quarter Group C</option>\n          </select>\n        </div>\n        <div class="col-sm-6" style="padding-right: 0px; padding-left:3px;margin-bottom: 5px">\n        <div class="btn-group btn-group-sm pull-right">\n          <button type="button" class="btn btn-default btn-sm" (click)="pushPeriodBackward()" style="height: 25px;font-size: 10px">Prev Year</button>\n          <button type="button" class="btn btn-default btn-sm" (click)="pushPeriodForward()" style="height: 25px;font-size: 10px">Pext Year</button>\n        </div>\n      </div>\n      </div>\n      <div class="search-area">\n        <form *ngIf="!period_tree_config.loading && period_tree_config.show_search" style="border-bottom: solid 1px #dddddd;">\n          <input #filter (keyup)="filterNodes(filter.value, pertree)" placeholder="{{ period_tree_config.search_text }}" id="search_field"/>\n\n        </form>\n      </div>\n      <div *ngIf="period_tree_config.loading">{{ period_tree_config.loading_message }}</div>\n      <div class="" *ngIf="!period_tree_config.loading"  style="border-top: solid 0px blanchedalmond;">\n        <div class="container-fluid" style="border-bottom: solid 1px #dddddd; padding: 0px 0px; margin-bottom: 4px">\n          <div class="col-sm-6" style="padding-top:8px;padding-left:3px;border-right: 1px solid rgba(0,0,0,0.1); text-align: left;font-size: 11px">\n            <ul class="list-inline data-header-list">\n              <li><b>Available <span class="fadeOut">({{periods.length }})</span></b></li>\n              <li class="pull-right pointer"><a (click)="selectAllItems()" title="Select all"><i class="fa fa-angle-double-right"></i></a></li>\n            </ul>\n          </div>\n          <div class="col-sm-6" style="padding-top:8px;padding-right:3px; text-align: right;font-size: 11px">\n            <ul class="list-inline data-header-list">\n              <li class="pull-right"><b>Selected <span class="fadeOut">({{selected_periods.length }})</span></b></li>\n              <li class="pull-left pointer"><a (click)="deselectAllItems()" title="Remove all selections"><i class="fa fa-angle-double-left"></i></a></li>\n            </ul>\n          </div>\n        </div>\n        <div class="col-sm-6 tree-area1" style=" border-right: 1px solid rgba(0,0,0,0.1)">\n          <ul class="nav nav-pills nav-stacked">\n            <li *ngFor="let period of periods"\n                class="period" (click)="activatePer(period)"\n                [ngClass]="{\'hiddenTree\': checkPeriodAvailabilty(period,selected_periods)}"\n                title="Click to select"\n            >\n              {{ period.name }}\n            </li>\n          </ul>\n        </div>\n        <div class="col-sm-6 tree-area1">\n          <ul class="nav nav-pills nav-stacked">\n            <li *ngFor="let period of selected_periods"\n                class="period" (click)="deactivatePer(period);$event.stopPropagation()"\n                title="Click to deselect"\n                dnd-droppable (onDropSuccess)="transferDataSuccess($event,period)"\n            >\n              <div dnd-draggable [dragEnabled]="true" [dragData]="period">{{ period.name }}</div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n'
    },
    SNFC: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return r
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            r = function() {
                function e() {}
                return e.prototype.getPeriodArray = function(e, t) {
                    var n = [];
                    if ("Weekly" == e) n.push({
                        id: "",
                        name: ""
                    });
                    else if ("Monthly" == e) n.push({
                        id: t + "12",
                        name: "December " + t
                    }, {
                        id: t + "11",
                        name: "November " + t
                    }, {
                        id: t + "10",
                        name: "October " + t
                    }, {
                        id: t + "09",
                        name: "September " + t
                    }, {
                        id: t + "08",
                        name: "August " + t
                    }, {
                        id: t + "07",
                        name: "July " + t
                    }, {
                        id: t + "06",
                        name: "June " + t
                    }, {
                        id: t + "05",
                        name: "May " + t
                    }, {
                        id: t + "04",
                        name: "April " + t
                    }, {
                        id: t + "03",
                        name: "March " + t
                    }, {
                        id: t + "02",
                        name: "February " + t
                    }, {
                        id: t + "01",
                        name: "January " + t,
                        selected: !0
                    });
                    else if ("BiMonthly" == e) n.push({
                        id: t + "01B",
                        name: "January - February " + t,
                        selected: !0
                    }, {
                        id: t + "02B",
                        name: "March - April " + t
                    }, {
                        id: t + "03B",
                        name: "May - June " + t
                    }, {
                        id: t + "04B",
                        name: "July - August " + t
                    }, {
                        id: t + "05B",
                        name: "September - October " + t
                    }, {
                        id: t + "06B",
                        name: "November - December " + t
                    });
                    else if ("Quarterly" == e) n.push({
                        id: t + "Q4",
                        name: "October - December " + t
                    }, {
                        id: t + "Q3",
                        name: "July - September " + t
                    }, {
                        id: t + "Q2",
                        name: "April - June " + t
                    }, {
                        id: t + "Q1",
                        name: "January - March " + t,
                        selected: !0
                    });
                    else if ("SixMonthly" == e) n.push({
                        id: t + "S1",
                        name: "January - June " + t,
                        selected: !0
                    }, {
                        id: t + "S2",
                        name: "July - December " + t
                    });
                    else if ("SixMonthlyApril" == e) {
                        var a = parseInt(t) + 1;
                        n.push({
                            id: t + "AprilS2",
                            name: "October " + t + " - March " + a,
                            selected: !0
                        }, {
                            id: t + "AprilS1",
                            name: "April - September " + t
                        })
                    } else if ("FinancialOct" == e)
                        for (var i = 0; i <= 10; i++) {
                            var a = parseInt(t) - i,
                                o = a + 1;
                            n.push({
                                id: a + "Oct",
                                name: "October " + a + " - September " + o
                            })
                        } else if ("Yearly" == e)
                        for (var i = 0; i <= 10; i++) {
                            var a = parseInt(t) - i;
                            n.push({
                                id: a,
                                name: a
                            })
                        } else if ("FinancialJuly" == e)
                        for (var i = 0; i <= 10; i++) {
                            var a = parseInt(t) - i,
                                o = a + 1;
                            n.push({
                                id: a + "July",
                                name: "July " + a + " - June " + o
                            })
                        } else if ("FinancialApril" == e)
                        for (var i = 0; i <= 10; i++) {
                            var a = parseInt(t) - i,
                                o = a + 1;
                            n.push({
                                id: a + "April",
                                name: "April " + a + " - March " + o
                            })
                        } else "Relative Weeks" == e ? n.push({
                            id: "THIS_WEEK",
                            name: "This Week"
                        }, {
                            id: "LAST_WEEK",
                            name: "Last Week"
                        }, {
                            id: "LAST_4_WEEK",
                            name: "Last 4 Weeks",
                            selected: !0
                        }, {
                            id: "LAST_12_WEEK",
                            name: "last 12 Weeks"
                        }, {
                            id: "LAST_52_WEEK",
                            name: "Last 52 weeks"
                        }) : "RelativeMonth" == e ? n.push({
                            id: "THIS_MONTH",
                            name: "This Month"
                        }, {
                            id: "LAST_MONTH",
                            name: "Last Month"
                        }, {
                            id: "LAST_3_MONTHS",
                            name: "Last 3 Months"
                        }, {
                            id: "LAST_6_MONTHS",
                            name: "Last 6 Months"
                        }, {
                            id: "LAST_12_MONTHS",
                            name: "Last 12 Months",
                            selected: !0
                        }) : "Relative Bi-Month" == e ? n.push({
                            id: "THIS_BIMONTH",
                            name: "This Bi-month"
                        }, {
                            id: "LAST_BIMONTH",
                            name: "Last Bi-month"
                        }, {
                            id: "LAST_6_BIMONTHS",
                            name: "Last 6 bi-month",
                            selected: !0
                        }) : "RelativeQuarter" == e ? n.push({
                            id: "THIS_QUARTER",
                            name: "This Quarter"
                        }, {
                            id: "LAST_QUARTER",
                            name: "Last Quarter"
                        }, {
                            id: "LAST_4_QUARTERS",
                            name: "Last 4 Quarters",
                            selected: !0
                        }) : "RelativeSixMonthly" == e ? n.push({
                            id: "THIS_SIX_MONTH",
                            name: "This Six-month"
                        }, {
                            id: "LAST_SIX_MONTH",
                            name: "Last Six-month"
                        }, {
                            id: "LAST_2_SIXMONTHS",
                            name: "Last 2 Six-month",
                            selected: !0
                        }) : "RelativeFinancialYear" == e ? n.push({
                            id: "THIS_FINANCIAL_YEAR",
                            name: "This Financial Year"
                        }, {
                            id: "LAST_FINANCIAL_YEAR",
                            name: "Last Financial Year",
                            selected: !0
                        }, {
                            id: "LAST_5_FINANCIAL_YEARS",
                            name: "Last 5 Financial Years"
                        }) : "RelativeYear" == e && n.push({
                            id: "THIS_YEAR",
                            name: "This Year"
                        }, {
                            id: "LAST_YEAR",
                            name: "Last Year",
                            selected: !0
                        }, {
                            id: "LAST_5_YEARS",
                            name: "Last 5 Five Years"
                        });
                    return n
                }, e.prototype.getPeriodName = function(e) {
                    var t = "",
                        n = "",
                        a = "";
                    ["LAST_12_MONTHS", "LAST_6_MONTHS", "LAST_3_MONTHS", "LAST_MONTH", "THIS_MONTH"].indexOf(e) > -1 ? (n = "RelativeMonth", a = e) : ["THIS_QUARTER", "LAST_QUARTER", "LAST_4_QUARTERS"].indexOf(e) > -1 ? (n = "RelativeQuarter", a = e) : ["THIS_FINANCIAL_YEAR", "LAST_FINANCIAL_YEAR", "LAST_5_FINANCIAL_YEARS"].indexOf(e) > -1 ? (n = "RelativeFinancialYear", a = e) : e.indexOf("Q") > -1 ? (n = "Quarterly", a = e.substr(0, 4)) : e.indexOf("July") > -1 ? (n = "FinancialJuly", a = e.substr(0, 4)) : (n = "Monthly", a = e.substr(0, 4));
                    var t = "";
                    return this.getPeriodArray(n, a).forEach(function(n) {
                        n.id == e && (t = n.name)
                    }), t
                }, e.prototype.getPeriodType = function(e) {
                    return ["LAST_12_MONTHS", "LAST_6_MONTHS", "LAST_3_MONTHS", "LAST_MONTH", "THIS_MONTH", "THIS_QUARTER", "LAST_QUARTER", "LAST_4_QUARTERS", "THIS_FINANCIAL_YEAR", "LAST_FINANCIAL_YEAR", "LAST_5_FINANCIAL_YEARS"].indexOf(e) > -1 ? e : e.indexOf("Q") > -1 ? "Quarterly" : e.indexOf("July") > -1 ? "FinancialJuly" : "Monthly"
                }, e.prototype.isDateInPeriod = function(e, t) {
                    var n = new Date(e),
                        a = new Date,
                        i = new Date;
                    return "LAST_12_MONTHS" == t ? (a = new Date((new Date).getFullYear(), (new Date).getMonth() - 12, 1), i = new Date((new Date).getFullYear(), (new Date).getMonth(), 0)) : "LAST_6_MONTHS" == t ? (a = new Date((new Date).getFullYear(), (new Date).getMonth() - 6, 1), i = new Date((new Date).getFullYear(), (new Date).getMonth(), 0)) : "LAST_3_MONTHS" == t ? (a = new Date((new Date).getFullYear(), (new Date).getMonth() - 3, 1), i = new Date((new Date).getFullYear(), (new Date).getMonth(), 0)) : "LAST_MONTH" == t ? (a = new Date((new Date).getFullYear(), (new Date).getMonth() - 1, 1), i = new Date((new Date).getFullYear(), (new Date).getMonth(), 0)) : "THIS_MONTH" == t ? (a = new Date((new Date).getFullYear(), (new Date).getMonth(), 1), i = new Date((new Date).getFullYear(), (new Date).getMonth() + 1, 0)) : "THIS_QUARTER" == t ? (a = new Date((new Date).getFullYear(), 3 * Math.floor((new Date).getMonth() / 3), 1), i = new Date((new Date).getFullYear(), 3 * Math.floor((new Date).getMonth() / 3) + 3, 0)) : "LAST_QUARTER" == t ? (a = new Date((new Date).getFullYear(), 3 * (Math.floor((new Date).getMonth() / 3) - 1), 1), i = new Date((new Date).getFullYear(), 3 * (Math.floor((new Date).getMonth() / 3) - 1) + 3, 0)) : "LAST_4_QUARTERS" == t ? (a = new Date((new Date).getFullYear(), 3 * (Math.floor((new Date).getMonth() / 3) - 4), 1), i = new Date((new Date).getFullYear(), 3 * (Math.floor((new Date).getMonth() / 3) - 1) + 3, 0)) : "THIS_FINANCIAL_YEAR" == t ? (a = new Date((new Date).getFullYear() - ((new Date).getMonth() >= 6 ? 0 : 1), 6, 1), i = new Date((new Date).getFullYear() + ((new Date).getMonth() >= 6 ? 1 : 0), 6, 0)) : "LAST_FINANCIAL_YEAR" == t ? (a = new Date((new Date).getFullYear() - ((new Date).getMonth() >= 6 ? 0 : 1) - 1, 6, 1), i = new Date((new Date).getFullYear() + ((new Date).getMonth() >= 6 ? 1 : 0) - 1, 6, 0)) : "LAST_5_FINANCIAL_YEARS" == t ? (a = new Date((new Date).getFullYear() - ((new Date).getMonth() >= 6 ? 0 : 1) - 5, 6, 1), i = new Date((new Date).getFullYear() + ((new Date).getMonth() >= 6 ? 1 : 0) - 5, 6, 0)) : t.indexOf("Q") > -1 ? (a = new Date(parseInt(t.substr(0, 4)), 3 * (parseInt(t.substr(5)) - 1)), i = new Date(parseInt(t.substr(0, 4)), 3 * (parseInt(t.substr(5)) - 1) + 3, 0)) : t.indexOf("July") > -1 ? (a = new Date(parseInt(t.substr(0, 4)), 6), i = new Date(parseInt(t.substr(0, 4)) + 1, 6, 0)) : (a = new Date(parseInt(t.substr(0, 4)), parseInt(t.substr(4)) - 1), i = new Date(parseInt(t.substr(0, 4)), parseInt(t.substr(4)), 0)), a.getTime() <= n.getTime() && i.getTime() >= n.getTime()
                }, e.prototype.convertDateToPeriod = function(e, t) {
                    var n = e,
                        a = new Date(e);
                    return "Quarterly" == t ? n = a.getFullYear() + "Q" + Math.ceil((a.getMonth() + 1) / 3) : "FinancialJuly" == t ? n = (a.getMonth() < 6 ? a.getFullYear() - 1 : a.getFullYear()) + "July" : "Monthly" == t ? n = a.getFullYear() + (a.getMonth() < 9 ? "0" : "") + (a.getMonth() + 1) : ["LAST_12_MONTHS", "LAST_6_MONTHS", "LAST_3_MONTHS", "LAST_MONTH", "THIS_MONTH", "THIS_QUARTER", "LAST_QUARTER", "LAST_4_QUARTERS", "THIS_FINANCIAL_YEAR", "LAST_FINANCIAL_YEAR", "LAST_5_FINANCIAL_YEARS"].indexOf(t) > -1 && (n = t), n
                }, e
            }();
        r = i([n.i(a.c)(), o("design:paramtypes", [])], r)
    },
    TzTL: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return r
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            r = function() {
                function e() {}
                return e.prototype.download = function(e, t) {
                    var n = function(e) {
                            return window.btoa(unescape(encodeURIComponent(e)))
                        },
                        a = function(e, t) {
                            return e.replace(/{(\w+)}/g, function(e, n) {
                                return t[n]
                            })
                        },
                        i = {
                            worksheet: "Sheet 1"
                        },
                        o = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>',
                        r = t;
                    $(r).find("td.hidden").each(function(e) {
                        this.remove()
                    }), i.table1 = r.innerHTML.split("& ").join("&amp; "), o += '<table border="1">{table1}</table><br />', o += "</body></html>", setTimeout(function() {
                        var t = document.createElement("a");
                        t.download = e + ".xls", t.href = "data:application/vnd.ms-excel;base64," + n(a(o, i)), t.click()
                    }, 100)
                }, e
            }();
        r = i([n.i(a.c)(), o("design:paramtypes", [])], r)
    },
    W3qg: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return r
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            r = function() {
                function e() {
                    this.enable_labels = !1
                }
                return e.prototype.drawChart = function(e, t) {
                    var n = null;
                    switch (t.hasOwnProperty("show_labels") || (t.show_labels = !1), t.type) {
                        case "bar":
                            n = this.drawOtherCharts(e, t), n.plotOptions = {
                                bar: {
                                    dataLabels: {
                                        enabled: t.show_labels
                                    }
                                }
                            };
                            break;
                        case "column":
                            n = this.drawOtherCharts(e, t), n.plotOptions = {
                                column: {
                                    dataLabels: {
                                        enabled: t.show_labels
                                    }
                                }
                            };
                            break;
                        case "radar":
                            n = this.drawSpiderChart(e, t);
                            break;
                        case "stacked_column":
                            t.stackingType = "column", n = this.drawStackedChart(e, t);
                            break;
                        case "stacked_bar":
                            t.stackingType = "bar", n = this.drawStackedChart(e, t);
                            break;
                        case "gauge":
                            n = this.drawGaugeChart(e, t);
                            break;
                        case "combined":
                            n = this.drawCombinedChart(e, t), n.plotOptions = {
                                column: {
                                    dataLabels: {
                                        enabled: t.show_labels
                                    }
                                }
                            };
                            break;
                        case "line":
                            n = this.drawOtherCharts(e, t), n.plotOptions = {
                                line: {
                                    dataLabels: {
                                        enabled: t.show_labels
                                    }
                                }
                            };
                            break;
                        case "area":
                            n = this.drawOtherCharts(e, t), n.plotOptions = {
                                area: {
                                    dataLabels: {
                                        enabled: t.show_labels
                                    }
                                }
                            };
                            break;
                        case "pie":
                            n = this.drawPieChart(e, t);
                            break;
                        default:
                            n = this.drawOtherCharts(e, t)
                    }
                    return n.credits = {
                        enabled: !1
                    }, n
                }, e.prototype._getTitleIndex = function(e, t) {
                    for (var n = 0, a = 0, i = 0, o = e; i < o.length; i++) {
                        o[i].name == t && (n = a), a++
                    }
                    return n
                }, e.prototype._sanitizeIncomingAnalytics = function(e) {
                    for (var t = 0, n = e.headers; t < n.length; t++) {
                        var a = n[t];
                        if (a.hasOwnProperty("optionSet"))
                            if (0 == e.metaData[a.name].length) {
                                e.metaData[a.name] = this._getRowItems(this._getTitleIndex(e.headers, a.name), e.rows);
                                for (var i = 0, o = e.metaData[a.name]; i < o.length; i++) {
                                    var r = o[i];
                                    e.metaData.names[r] = r
                                }
                            } else
                                for (var s = 0, l = e.metaData[a.name]; s < l.length; s++) {
                                    var r = l[s];
                                    e.metaData.names[r] = r
                                }
                    }
                    return e
                }, e.prototype._getRowItems = function(e, t) {
                    for (var n = [], a = 0, i = t; a < i.length; a++) {
                        var o = i[a]; - 1 == n.indexOf(o[e]) && n.push(o[e])
                    }
                    return n
                }, e.prototype.getMetadataArray = function(e, t) {
                    return "dx" === t ? e.metaData.dx : "ou" === t ? e.metaData.ou : "co" === t ? e.metaData.co : "pe" === t ? e.metaData.pe : e.metaData[t]
                }, e.prototype.getDetailedMetadataArray = function(e, t) {
                    var n = [];
                    e = this._sanitizeIncomingAnalytics(e);
                    for (var a = 0, i = e.metaData[t]; a < i.length; a++) {
                        var o = i[a];
                        n.push({
                            id: o,
                            name: e.metaData.names[o]
                        })
                    }
                    return n
                }, e.prototype.prepareCategories = function(e, t, n, a, i) {
                    void 0 === a && (a = []), void 0 === i && (i = []), e = this._sanitizeIncomingAnalytics(e);
                    var o = {
                        xAxisItems: [],
                        yAxisItems: []
                    };
                    if (0 === a.length)
                        for (var r = 0, s = this.getMetadataArray(e, t); r < s.length; r++) {
                            var l = s[r];
                            o.xAxisItems.push({
                                name: e.metaData.names[l],
                                uid: l
                            })
                        }
                    if (0 !== a.length)
                        for (var c = 0, d = a; c < d.length; c++) {
                            var l = d[c];
                            o.xAxisItems.push({
                                name: e.metaData.names[l],
                                uid: l
                            })
                        }
                    if (0 !== i.length)
                        for (var p = 0, u = i; p < u.length; p++) {
                            var l = u[p];
                            o.yAxisItems.push({
                                name: e.metaData.names[l],
                                uid: l
                            })
                        }
                    if (0 === i.length)
                        for (var h = 0, g = this.getMetadataArray(e, n); h < g.length; h++) {
                            var l = g[h];
                            o.yAxisItems.push({
                                name: e.metaData.names[l],
                                uid: l
                            })
                        }
                    return o
                }, e.prototype.prepareSingleCategories = function(e, t, n) {
                    void 0 === n && (n = []), e = this._sanitizeIncomingAnalytics(e);
                    var a = [];
                    if (0 === n.length)
                        for (var i = 0, o = this.getMetadataArray(e, t); i < o.length; i++) {
                            var r = o[i];
                            a.push({
                                name: e.metaData.names[r],
                                uid: r,
                                type: t
                            })
                        }
                    if (0 !== n.length)
                        for (var s = 0, l = n; s < l.length; s++) {
                            var r = l[s];
                            a.push({
                                name: e.metaData.names[r],
                                uid: r,
                                type: t
                            })
                        }
                    return a
                }, e.prototype.getDataValue = function(e, t) {
                    void 0 === t && (t = []);
                    for (var n = null, a = 0, i = e.rows; a < i.length; a++) {
                        for (var o = i[a], r = 0, s = 0, l = t; s < l.length; s++) {
                            var c = l[s];
                            o[this._getTitleIndex(e.headers, c.type)] === c.value && r++
                        }
                        r === t.length && (isNaN(o[this._getTitleIndex(e.headers, "value")]) ? n = o[this._getTitleIndex(e.headers, "value")] : n += parseFloat(o[this._getTitleIndex(e.headers, "value")]))
                    }
                    return n
                }, e.prototype.getAutoGrowingDataValue = function(e, t) {
                    void 0 === t && (t = []);
                    for (var n, a = 0, i = e.rows; a < i.length; a++) {
                        for (var o = i[a], r = 0, s = 0, l = t; s < l.length; s++) {
                            var c = l[s];
                            o[this._getTitleIndex(e.headers, c.type)] === c.value && r++
                        }
                        r === t.length && (n = o[this._getTitleIndex(e.headers, "value")])
                    }
                    return n
                }, e.prototype.getDataObject = function(e, t, n) {
                    var a = [];
                    return a.push({
                        type: e.xAxisType,
                        value: t.uid
                    }), a.push({
                        type: e.yAxisType,
                        value: n.uid
                    }), e.hasOwnProperty("filterType") && a.push({
                        type: e.filterType,
                        value: e.filterUid
                    }), a
                }, e.prototype.drawPieChart = function(e, t) {
                    var n = this.getChartConfigurationObject("pieChart", t.show_labels);
                    n.title.text = t.title;
                    for (var a = this.prepareCategories(e, t.xAxisType, t.yAxisType, t.xAxisItems, t.yAxisItems), i = [], o = 0, r = a.yAxisItems; o < r.length; o++)
                        for (var s = r[o], l = 0, c = a.xAxisItems; l < c.length; l++) {
                            var d = c[l],
                                p = this.getDataObject(t, d, s),
                                u = this.getDataValue(e, p);
                            i.push({
                                name: s.name + " - " + d.name,
                                y: u
                            })
                        }
                    return n.series.push({
                        name: t.title,
                        data: i,
                        showInLegend: !1,
                        dataLabels: {
                            enabled: !1
                        }
                    }), n
                }, e.prototype.drawCombinedChart = function(e, t) {
                    var n = this.getChartConfigurationObject("defaultChartObject", t.show_labels);
                    n.title.text = t.title, n.chart.type = "";
                    var a = [],
                        i = this.prepareCategories(e, t.xAxisType, t.yAxisType, t.hasOwnProperty("xAxisItems") ? t.xAxisItems : [], t.hasOwnProperty("yAxisItems") ? t.yAxisItems : []);
                    n.xAxis.categories = [];
                    for (var o = 0, r = i.xAxisItems; o < r.length; o++) {
                        var s = r[o];
                        n.xAxis.categories.push(s.name)
                    }
                    n.series = [];
                    for (var l = 0, c = i.yAxisItems; l < c.length; l++) {
                        for (var d = c[l], p = [], u = 0, h = i.xAxisItems; u < h.length; u++) {
                            var g = h[u],
                                f = this.getDataObject(t, g, d),
                                m = this.getDataValue(e, f);
                            p.push(m), a.push({
                                name: d.name + " - " + g.name,
                                y: m
                            })
                        }
                        n.series.push({
                            type: "column",
                            name: d.name,
                            data: p
                        }), n.series.push({
                            type: "spline",
                            name: d.name,
                            data: p
                        }), t.hasOwnProperty("show_pie") && t.show_pie && n.series.push({
                            type: "pie",
                            name: d.name,
                            data: a
                        })
                    }
                    return n
                }, e.prototype.drawOtherCharts = function(e, t) {
                    var n = this.getChartConfigurationObject("defaultChartObject", t.show_labels);
                    "bar" == t.type ? (n.chart.type = t.type, n.xAxis.labels.rotation = 0) : n.chart.type = "", n.title.text = t.title;
                    var a = this.prepareCategories(e, t.xAxisType, t.yAxisType, t.hasOwnProperty("xAxisItems") ? t.xAxisItems : [], t.hasOwnProperty("yAxisItems") ? t.yAxisItems : []);
                    n.xAxis.categories = [];
                    for (var i = 0, o = a.xAxisItems; i < o.length; i++) {
                        var r = o[i];
                        n.xAxis.categories.push(r.name)
                    }
                    n.series = [];
                    for (var s = 0, l = a.yAxisItems; s < l.length; s++) {
                        for (var c = l[s], d = [], p = 0, u = a.xAxisItems; p < u.length; p++) {
                            var h = u[p],
                                g = this.getDataObject(t, h, c),
                                f = this.getDataValue(e, g);
                            d.push(f)
                        }
                        n.series.push({
                            type: t.type,
                            name: c.name,
                            data: d
                        })
                    }
                    return n
                }, e.prototype.getCsvData = function(e, t) {
                    for (var n = [], a = this.drawOtherCharts(e, t), i = 0, o = a.series; i < o.length; i++) {
                        for (var r = o[i], s = {
                            name: r.name
                        }, l = 0, c = 0, d = a.xAxis.categories; c < d.length; c++) {
                            s[d[c]] = r.data[l], l++
                        }
                        n.push(s)
                    }
                    return n
                }, e.prototype.drawStackedChart = function(e, t) {
                    var n = "bar" == t.stackingType ? this.getChartConfigurationObject("barStackedObject", t.show_labels) : this.getChartConfigurationObject("stackedChartObject", t.show_labels);
                    n.title.text = t.title;
                    var a = this.prepareCategories(e, t.xAxisType, t.yAxisType, t.hasOwnProperty("xAxisItems") ? t.xAxisItems : [], t.hasOwnProperty("yAxisItems") ? t.yAxisItems : []);
                    n.xAxis.categories = [], n.series = [];
                    for (var i = 0, o = a.xAxisItems; i < o.length; i++) {
                        var r = o[i];
                        n.xAxis.categories.push(r.name)
                    }
                    for (var s = 0, l = a.yAxisItems; s < l.length; s++) {
                        for (var c = l[s], d = [], p = 0, u = a.xAxisItems; p < u.length; p++) {
                            var h = u[p],
                                g = this.getDataObject(t, h, c),
                                f = this.getDataValue(e, g);
                            d.push(f)
                        }
                        n.series.push({
                            name: c.name,
                            data: d
                        })
                    }
                    return n
                }, e.prototype.drawGaugeChart = function(e, t) {
                    var n = this.getChartConfigurationObject("gaugeObject", t.show_labels);
                    n.title.text = t.title;
                    for (var a = this.prepareCategories(e, t.xAxisType, t.yAxisType, t.hasOwnProperty("xAxisItems") ? t.xAxisItems : [], t.hasOwnProperty("yAxisItems") ? t.yAxisItems : []), i = 0, o = 0, r = a.yAxisItems; o < r.length; o++)
                        for (var s = r[o], l = [], c = 0, d = a.xAxisItems; c < d.length; c++) {
                            var p = d[c],
                                u = this.getDataObject(t, p, s),
                                h = this.getDataValue(e, u);
                            l.push(h), i = h
                        }
                    return n.series = [], n.yAxis.max = t.hasOwnProperty("maximum_score") ? t.maximun_score : 100, n.series.push({
                        name: t.title,
                        data: [i],
                        tooltip: {
                            valueSuffix: " "
                        }
                    }), n
                }, e.prototype.drawSpiderChart = function(e, t) {
                    for (var n = this.prepareCategories(e, t.xAxisType, t.yAxisType, t.hasOwnProperty("xAxisItems") ? t.xAxisItems : [], t.hasOwnProperty("yAxisItems") ? t.yAxisItems : []), a = [], i = 0, o = n.xAxisItems; i < o.length; i++) {
                        var r = o[i];
                        a.push(r.name)
                    }
                    for (var s = [], l = 0, c = n.yAxisItems; l < c.length; l++) {
                        for (var d = c[l], p = [], u = 0, h = n.xAxisItems; u < h.length; u++) {
                            var g = h[u],
                                f = this.getDataObject(t, g, d),
                                m = this.getDataValue(e, f);
                            p.push(m)
                        }
                        s.push({
                            name: d.name,
                            data: p,
                            pointPlacement: "on"
                        })
                    }
                    return {
                        chart: {
                            polar: !0,
                            type: "area",
                            events: {
                                load: function(e) {
                                    setTimeout(function() {
                                        e.target.reflow()
                                    }, 0)
                                }
                            }
                        },
                        title: {
                            text: t.title,
                            x: -80
                        },
                        pane: {
                            size: "90%"
                        },
                        xAxis: {
                            categories: a,
                            tickmarkPlacement: "on",
                            lineWidth: 0
                        },
                        yAxis: {
                            gridLineInterpolation: "polygon",
                            lineWidth: 0,
                            min: 0
                        },
                        tooltip: {
                            shared: !0
                        },
                        legend: {
                            align: "center",
                            verticalAlign: "bottom",
                            y: 70,
                            layout: "horizontal"
                        },
                        series: s
                    }
                }, e.prototype.drawTable = function(e, t) {
                    console.log("Table configurations", t);
                    var n = {
                        headers: [],
                        columns: [],
                        rows: [],
                        titles: {
                            rows: [],
                            column: []
                        },
                        titlesAvailable: !1,
                        hasParentOu: !1
                    };
                    if (t.hasOwnProperty("title") && (n.title = t.title), t.hasOwnProperty("display_list") && t.display_list) {
                        n.headers[0] = {
                            items: [],
                            style: ""
                        }, t.columns[t.columns.indexOf("pe")] = "eventdate", t.columns[t.columns.indexOf("ou")] = "ouname";
                        for (var a = 0, i = t.columns; a < i.length; a++) {
                            var o = i[a];
                            n.headers[0].items.push({
                                name: e.headers[this._getTitleIndex(e.headers, o)].column,
                                span: 1
                            })
                        }
                        for (var r = 0, s = e.rows; r < s.length; r++) {
                            for (var o = s[r], l = [], c = 0, d = t.columns; c < d.length; c++) {
                                var p = d[c],
                                    u = this._getTitleIndex(e.headers, p);
                                l.push({
                                    name: "",
                                    display: !0,
                                    row_span: "1",
                                    val: o[u]
                                })
                            }
                            n.rows.push({
                                headers: [],
                                items: l
                            })
                        }
                    } else {
                        if (t.showDimensionLabels) {
                            n.titlesAvailable = !0;
                            for (var h = 0, g = t.columns; h < g.length; h++) {
                                var o = g[h];
                                n.titles.column.push(e.headers[this._getTitleIndex(e.headers, o)].column)
                            }
                            for (var f = 0, m = t.rows; f < m.length; f++) {
                                var o = m[f];
                                n.titles.rows.push(e.headers[this._getTitleIndex(e.headers, o)].column)
                            }
                        }
                        for (var y = 0, v = t.columns; y < v.length; y++) {
                            for (var b = v[y], _ = this.calculateColSpan(e, t.columns, b), x = this.prepareSingleCategories(e, b), w = [], A = 0; A < _.duplication; A++)
                                for (var O = 0, E = x; O < E.length; O++) {
                                    var D = E[O];
                                    w.push({
                                        name: D.name,
                                        span: _.col_span,
                                        type: D.type,
                                        id: D.uid
                                    })
                                }
                            var T = "";
                            t.hasOwnProperty("style") && t.styles.hasOwnProperty(b) && (T = t.styles[b]), n.headers.push({
                                items: w,
                                style: T
                            })
                        }
                        for (var S = 0, I = t.rows; S < I.length; S++) {
                            var k = I[S];
                            n.columns.push(k)
                        }
                        for (var R = t.columns.length, j = [], A = 0; A < R; A++) {
                            var F = this.prepareSingleCategories(e, t.columns[A]);
                            j.push(F)
                        }
                        for (var C = [], A = 0; A < j.length; A++)
                            if (0 === C.length)
                                for (var P = 0, M = j[A]; P < M.length; P++) {
                                    var o = M[P];
                                    C.push([o])
                                } else {
                                var L = C.concat();
                                C = [];
                                for (var U = 0, N = L; U < N.length; U++)
                                    for (var o = N[U], B = 0, G = j[A]; B < G.length; B++) {
                                        var $ = G[B];
                                        if (o instanceof Array) {
                                            var z = Array.from(o);
                                            C.push(z.concat([$]))
                                        } else C.push([o, $])
                                    }
                            }
                        for (var Q = t.rows.length, H = [], A = 0; A < Q; A++) {
                            var _ = this.calculateColSpan(e, t.rows, t.rows[A]),
                                F = this.prepareSingleCategories(e, t.rows[A]);
                            H.push({
                                items: F,
                                dimensions: _
                            })
                        }
                        for (var Y = [], A = 0; A < H.length; A++)
                            if (0 === Y.length)
                                for (var W = 0, V = H[A].items; W < V.length; W++) {
                                    var o = V[W];
                                    o.dimensions = H[A].dimensions, Y.push([o])
                                } else {
                                var L = Y.concat();
                                Y = [];
                                for (var J = 0, K = L; J < K.length; J++)
                                    for (var o = K[J], Z = 0, q = H[A].items; Z < q.length; Z++) {
                                        var $ = q[Z];
                                        if ($.dimensions = H[A].dimensions, o instanceof Array) {
                                            var z = Array.from(o);
                                            Y.push(z.concat([$]))
                                        } else Y.push([o, $])
                                    }
                            }
                        var X = 0;
                        if (0 != Y.length)
                            for (var ee = 0, te = Y; ee < te.length; ee++) {
                                for (var k = te[ee], o = {
                                    items: [],
                                    headers: k
                                }, ne = 0, ae = k; ne < ae.length; ne++) {
                                    var $ = ae[ne];
                                    0 !== X && X % $.dimensions.col_span != 0 || o.items.push({
                                        type: $.type,
                                        name: $.uid,
                                        val: $.name,
                                        row_span: $.dimensions.col_span,
                                        header: !0
                                    })
                                }
                                for (var ie = 0, oe = C; ie < oe.length; ie++) {
                                    for (var re = oe[ie], se = [], le = 0, ce = k; le < ce.length; le++) {
                                        var $ = ce[le];
                                        se.push({
                                            type: $.type,
                                            value: $.uid
                                        })
                                    }
                                    for (var de = 0, pe = re; de < pe.length; de++) {
                                        var $ = pe[de];
                                        se.push({
                                            type: $.type,
                                            value: $.uid
                                        })
                                    }
                                    o.items.push({
                                        name: "",
                                        val: this.getDataValue(e, se),
                                        row_span: "1",
                                        display: !0
                                    })
                                }
                                t.hasOwnProperty("hide_zeros") && t.hide_zeros ? (console.log(o.items), this.checkZeros(t.rows.length, o.items) || n.rows.push(o)) : n.rows.push(o), X++
                            } else {
                            for (var o = {
                                items: [],
                                headers: []
                            }, ue = 0, he = C; ue < he.length; ue++) {
                                for (var re = he[ue], se = [], ge = 0, fe = re; ge < fe.length; ge++) {
                                    var $ = fe[ge];
                                    se.push({
                                        type: $.type,
                                        value: $.uid
                                    })
                                }
                                o.items.push({
                                    name: "",
                                    val: this.getDataValue(e, se),
                                    row_span: "1",
                                    display: !0
                                })
                            }
                            t.hasOwnProperty("hide_zeros") && t.hide_zeros ? (console.log(o.items), this.checkZeros(t.rows.length, o.items) || n.rows.push(o)) : n.rows.push(o)
                        }
                    }
                    return n
                }, e.prototype.drawAutogrowingTable = function(e, t) {
                    var n = {
                        headers: [],
                        columns: [],
                        rows: [],
                        titles: {
                            rows: [],
                            column: []
                        }
                    };
                    if (t.hasOwnProperty("title") && (n.title = t.title), t.hasOwnProperty("display_list") && t.display_list) {
                        n.headers[0] = {
                            items: [],
                            style: ""
                        }, t.columns[t.columns.indexOf("pe")] = "eventdate", t.columns[t.columns.indexOf("ou")] = "ouname";
                        for (var a = 0, i = t.columns; a < i.length; a++) {
                            var o = i[a];
                            n.headers[0].items.push({
                                name: e.headers[this._getTitleIndex(e.headers, o)].column,
                                span: 1
                            })
                        }
                        for (var r = 0, s = e.rows; r < s.length; r++) {
                            for (var o = s[r], l = [], c = 0, d = t.columns; c < d.length; c++) {
                                var p = d[c],
                                    u = this._getTitleIndex(e.headers, p);
                                l.push({
                                    name: "",
                                    display: !0,
                                    row_span: "1",
                                    val: o[u]
                                })
                            }
                            n.rows.push({
                                headers: [],
                                items: l
                            })
                        }
                    } else {
                        for (var h = 0, g = t.columns; h < g.length; h++) {
                            var o = g[h];
                            n.titles.column.push(e.headers[this._getTitleIndex(e.headers, o)].column)
                        }
                        for (var f = 0, m = t.rows; f < m.length; f++) {
                            var o = m[f];
                            n.titles.rows.push(e.headers[this._getTitleIndex(e.headers, o)].column)
                        }
                        for (var y = 0, v = t.columns; y < v.length; y++) {
                            for (var b = v[y], _ = this.calculateColSpan(e, t.columns, b), x = this.prepareSingleCategories(e, b), w = [], A = 0; A < _.duplication; A++)
                                for (var O = 0, E = x; O < E.length; O++) {
                                    var D = E[O];
                                    w.push({
                                        name: D.name,
                                        span: _.col_span
                                    })
                                }
                            var T = "";
                            t.hasOwnProperty("style") && t.styles.hasOwnProperty(b) && (T = t.styles[b]), n.headers.push({
                                items: w,
                                style: T
                            })
                        }
                        for (var S = 0, I = t.rows; S < I.length; S++) {
                            var k = I[S];
                            n.columns.push(k)
                        }
                        for (var R = t.columns.length, j = [], A = 0; A < R; A++) {
                            var F = this.prepareSingleCategories(e, t.columns[A]);
                            j.push(F)
                        }
                        for (var C = [], A = 0; A < j.length; A++)
                            if (0 === C.length)
                                for (var P = 0, M = j[A]; P < M.length; P++) {
                                    var o = M[P];
                                    C.push([o])
                                } else {
                                var L = C.concat();
                                C = [];
                                for (var U = 0, N = L; U < N.length; U++)
                                    for (var o = N[U], B = 0, G = j[A]; B < G.length; B++) {
                                        var $ = G[B];
                                        if (o instanceof Array) {
                                            var z = Array.from(o);
                                            C.push(z.concat([$]))
                                        } else C.push([o, $])
                                    }
                            }
                        for (var Q = t.rows.length, H = [], A = 0; A < Q; A++) {
                            var _ = this.calculateColSpan(e, t.rows, t.rows[A]),
                                F = this.prepareSingleCategories(e, t.rows[A]);
                            H.push({
                                items: F,
                                dimensions: _
                            })
                        }
                        for (var Y = [], A = 0; A < H.length; A++)
                            if (0 === Y.length)
                                for (var W = 0, V = H[A].items; W < V.length; W++) {
                                    var o = V[W];
                                    o.dimensions = H[A].dimensions, Y.push([o])
                                } else {
                                var L = Y.concat();
                                Y = [];
                                for (var J = 0, K = L; J < K.length; J++)
                                    for (var o = K[J], Z = 0, q = H[A].items; Z < q.length; Z++) {
                                        var $ = q[Z];
                                        if ($.dimensions = H[A].dimensions, o instanceof Array) {
                                            var z = Array.from(o);
                                            Y.push(z.concat([$]))
                                        } else Y.push([o, $])
                                    }
                            }
                        var X = 0;
                        if (0 != Y.length)
                            for (var ee = 0, te = Y; ee < te.length; ee++) {
                                for (var k = te[ee], o = {
                                    items: [],
                                    headers: k
                                }, ne = 0, ae = k; ne < ae.length; ne++) {
                                    var $ = ae[ne];
                                    0 === X || $.dimensions.col_span
                                }
                                for (var ie = 0, oe = C; ie < oe.length; ie++) {
                                    for (var re = oe[ie], se = [], le = 0, ce = k; le < ce.length; le++) {
                                        var $ = ce[le];
                                        se.push({
                                            type: $.type,
                                            value: $.uid
                                        })
                                    }
                                    for (var de = 0, pe = re; de < pe.length; de++) {
                                        var $ = pe[de];
                                        se.push({
                                            type: $.type,
                                            value: $.uid
                                        })
                                    }
                                    o.items.push({
                                        name: "",
                                        val: this.getAutoGrowingDataValue(e, se),
                                        row_span: "1",
                                        display: !0
                                    })
                                }
                                t.hasOwnProperty("hide_zeros") && t.hide_zeros ? (console.log(o.items), this.checkZeros(t.rows.length, o.items) || n.rows.push(o)) : n.rows.push(o), X++
                            } else {
                            for (var o = {
                                items: [],
                                headers: []
                            }, ue = 0, he = C; ue < he.length; ue++) {
                                for (var re = he[ue], se = [], ge = 0, fe = re; ge < fe.length; ge++) {
                                    var $ = fe[ge];
                                    se.push({
                                        type: $.type,
                                        value: $.uid
                                    })
                                }
                                o.items.push({
                                    name: "",
                                    val: this.getAutoGrowingDataValue(e, se),
                                    row_span: "1",
                                    display: !0
                                })
                            }
                            t.hasOwnProperty("hide_zeros") && t.hide_zeros ? (console.log(o.items), this.checkZeros(t.rows.length, o.items) || n.rows.push(o)) : n.rows.push(o)
                        }
                    }
                    return n
                }, e.prototype.checkZeros = function(e, t) {
                    for (var n = !0, a = e; a < t.length; a++) "" == t[a].name && null != t[a].val && (n = !1);
                    return n
                }, e.prototype.calculateColSpan = function(e, t, n) {
                    for (var a = t.indexOf(n), i = t.length, o = i - 1, r = {
                        col_span: 1,
                        duplication: 1
                    }, s = o; s > a; s--) {
                        var l = this.prepareSingleCategories(e, t[s]);
                        r.col_span = r.col_span * l.length
                    }
                    for (var s = 0; s < a; s++) {
                        var l = this.prepareSingleCategories(e, t[s]);
                        r.duplication = r.duplication * l.length
                    }
                    return r
                }, e.prototype.getChartConfigurationObject = function(e, t) {
                    return void 0 === t && (t = !1), "defaultChartObject" == e ? {
                        title: {
                            text: ""
                        },
                        chart: {
                            events: {
                                load: function(e) {
                                    setTimeout(function() {
                                        e.target.reflow()
                                    }, 0)
                                }
                            },
                            type: ""
                        },
                        xAxis: {
                            categories: [],
                            labels: {
                                rotation: -45,
                                style: {
                                    color: "#000000",
                                    fontWeight: "normal"
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: ""
                            },
                            labels: {
                                style: {
                                    color: "#000000",
                                    fontWeight: "bold"
                                }
                            }
                        },
                        labels: {
                            items: [{
                                html: "",
                                style: {
                                    left: "50px",
                                    top: "18px"
                                }
                            }]
                        },
                        plotOptions: {},
                        series: []
                    } : "stackedChartObject" == e ? {
                        chart: {
                            type: "column",
                            events: {
                                load: function(e) {
                                    setTimeout(function() {
                                        e.target.reflow()
                                    }, 0)
                                }
                            }
                        },
                        title: {
                            text: ""
                        },
                        xAxis: {
                            categories: []
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: ""
                            },
                            stackLabels: {
                                enabled: t,
                                style: {
                                    fontWeight: "bold"
                                }
                            }
                        },
                        tooltip: {
                            headerFormat: "<b>{point.x}</b><br/>",
                            pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
                        },
                        plotOptions: {
                            column: {
                                stacking: "normal",
                                dataLabels: {
                                    enabled: !1
                                }
                            }
                        },
                        series: []
                    } : "barStackedObject" == e ? {
                        chart: {
                            type: "bar",
                            events: {
                                load: function(e) {
                                    setTimeout(function() {
                                        e.target.reflow()
                                    }, 0)
                                }
                            }
                        },
                        title: {
                            text: ""
                        },
                        xAxis: {
                            categories: []
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: ""
                            },
                            stackLabels: {
                                enabled: t,
                                style: {
                                    fontWeight: "bold"
                                }
                            }
                        },
                        legend: {
                            reversed: !0
                        },
                        plotOptions: {
                            series: {
                                stacking: "normal",
                                dataLabels: {
                                    enabled: !1
                                }
                            }
                        },
                        series: []
                    } : "gaugeObject" == e ? {
                        chart: {
                            type: "solidgauge",
                            events: {
                                load: function(e) {
                                    setTimeout(function() {
                                        e.target.reflow()
                                    }, 0)
                                }
                            }
                        },
                        title: {
                            text: ""
                        },
                        pane: {
                            center: ["50%", "85%"],
                            size: "140%",
                            startAngle: -90,
                            endAngle: 90,
                            background: {
                                backgroundColor: "#EEE",
                                innerRadius: "60%",
                                outerRadius: "100%",
                                shape: "arc"
                            }
                        },
                        tooltip: {
                            enabled: !1
                        },
                        yAxis: {
                            stops: [
                                [.1, "#DF5353"],
                                [.5, "#DDDF0D"],
                                [.9, "#55BF3B"]
                            ],
                            lineWidth: 0,
                            minorTickInterval: null,
                            tickPixelInterval: 400,
                            tickWidth: 0,
                            labels: {
                                y: 16
                            },
                            min: 0,
                            max: 100,
                            title: {
                                text: ""
                            }
                        },
                        plotOptions: {
                            solidgauge: {
                                dataLabels: {
                                    y: 5,
                                    borderWidth: 0,
                                    useHTML: !0
                                }
                            }
                        },
                        credits: {
                            enabled: !1
                        },
                        series: []
                    } : "pieChart" == e ? {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: !1,
                            type: "pie"
                        },
                        title: {
                            text: ""
                        },
                        tooltip: {
                            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
                        },
                        plotOptions: {
                            pie: {
                                borderWidth: 0,
                                allowPointSelect: !0,
                                cursor: "pointer",
                                dataLabels: {
                                    enabled: !0,
                                    format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                                    style: {
                                        color: "black"
                                    }
                                }
                            }
                        },
                        series: []
                    } : void 0
                }, e
            }();
        r = i([n.i(a.c)(), o("design:paramtypes", [])], r)
    },
    W4zo: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("Fzro"),
            o = n("+pb+"),
            r = (n.n(o), n("rCTf"));
        n.n(r);
        n.d(t, "a", function() {
            return c
        });
        var s = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            l = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            c = function() {
                function e(e) {
                    this.http = e, this.APIURL = "http://212.111.43.54:8182/elmis/api/", this.http = e
                }
                return e.prototype.createAuthorizationHeader = function() {
                    var e = "admin",
                        t = "district",
                        n = btoa(e + ":" + t),
                        a = new i.c;
                    return a.append("Authorization", "Basic " + n), a
                }, e.prototype.get = function(e) {
                    var t = this.createAuthorizationHeader();
                    return this.http.get(this.APIURL + e, {
                        headers: t
                    }).map(this.responseHandler()).catch(this.handleError)
                }, e.prototype.getRow = function(e) {
                    var t = this.createAuthorizationHeader();
                    return this.http.get(this.APIURL + e, {
                        headers: t
                    })
                }, e.prototype.post = function(e, t, n) {
                    var a = this.createAuthorizationHeader();
                    return this.http.post(this.APIURL + e, t, {
                        headers: a
                    }).map(this.responseHandler()).catch(this.handleError)
                }, e.prototype.put = function(e, t, n) {
                    var a = this.createAuthorizationHeader();
                    return this.http.put(this.APIURL + e, t, {
                        headers: a
                    }).map(this.responseHandler()).catch(this.handleError)
                }, e.prototype.delete = function(e, t) {
                    var n = new i.c;
                    return this.createAuthorizationHeader(), this.http.delete(this.APIURL + e, {
                        headers: n
                    }).map(this.responseHandler()).catch(this.handleError)
                }, e.prototype.responseHandler = function() {
                    return function(e) {
                        try {
                            return e.json()
                        } catch (e) {
                            return location.reload(), null
                        }
                    }
                }, e.prototype.handleError = function(e) {
                    return r.Observable.throw(e)
                }, e
            }();
        c = s([n.i(a.c)(), l("design:paramtypes", ["function" == typeof(d = void 0 !== i.b && i.b) && d || Object])], c);
        var d
    },
    WssD: function(e, t, n) {
        "use strict";

        function a(e) {
            var t = v.cloneDeep(e);
            return {
                data: t.storeData.selectedData,
                period: t.storeData.selectedPeriod,
                ou: t.storeData.selectedOrgUnits
            }
        }

        function i(e) {
            return v.cloneDeep(e).storeData.dataAnalytics.map(function(e) {
                return e.analytics
            })
        }

        function o(e) {
            return v.cloneDeep(e).storeData.layout
        }

        function r(e) {
            return v.cloneDeep(e).storeData.selectedData.itemList
        }

        function s(e) {
            return v.cloneDeep(e).storeData.selectedPeriod.items
        }

        function l(e) {
            return v.cloneDeep(e).storeData.selectedPeriod.type
        }

        function c(e) {
            return v.cloneDeep(e).storeData.selectedPeriod.starting_year
        }

        function d(e) {
            return v.cloneDeep(e).storeData.orgunit_model
        }

        function p(e) {
            return v.cloneDeep(e).storeData.currentAnalyticsParams
        }

        function u(e) {
            return v.cloneDeep(e).storeData.options
        }

        function h(e) {
            return v.cloneDeep(e).storeData.functions
        }

        function g(e) {
            return v.cloneDeep(e).storeData.mapping
        }

        function f(e) {
            var t = v.cloneDeep(e),
                n = [];
            n.push(t.storeData.selectedData.selectedData), n.push(t.storeData.selectedPeriod), n.push(t.storeData.selectedOrgUnits);
            return {
                id: "pivot",
                name: null,
                type: "TABLE",
                created: null,
                lastUpdated: null,
                shape: "NORMAL",
                details: {
                    externalDimensions: n,
                    externalLayout: t.storeData.layout
                },
                layers: [],
                operatingLayers: []
            }
        }

        function m(e) {
            return v.cloneDeep(e).storeData.currentEmptyAnalytics
        }

        function y(e) {
            var t = v.cloneDeep(e),
                n = [];
            return n.push(t.storeData.selectedData.selectedData), n.push(t.storeData.selectedPeriod), n.push(t.storeData.selectedOrgUnits), {
                data: t.storeData.selectedData,
                dataItems: t.storeData.selectedDataItems,
                dimensions: n
            }
        }
        var v = n("M4fF");
        n.n(v);
        t.b = a, t.o = i, t.l = o, t.d = r, t.e = s, t.f = l, t.g = c, t.h = d, t.j = p, t.k = u, t.i = h, t.m = g, t.a = f, t.c = m, t.n = y
    },
    XRdi: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("j8YU"),
            o = n("M4fF"),
            r = (n.n(o), n("QweH")),
            s = n("rCTf"),
            l = (n.n(s), n("D9Xg")),
            c = n("W4zo");
        n.d(t, "a", function() {
            return u
        });
        var d = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            p = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            u = function() {
                function e(e, t, n, a) {
                    this.constant = e, this.http = t, this.periodService = n, this.localStorageService = a, this.current_normal_analytics = null, this.analytics_lists = []
                }
                return e.prototype.prepareAnalytics = function(e, t, n) {
                    var a = this;
                    return void 0 === n && (n = !1), n ? s.Observable.create(function(e) {
                        e.next(a.current_normal_analytics), e.complete()
                    }) : this._checkIfAllDimensionExists(t) ? this.http.get(this._constructAnalyticUrlForExternalSource(e, t, "skipData=false")) : s.Observable.create(function(e) {
                        e.next(null), e.complete()
                    })
                }, e.prototype.prepareEmptyAnalytics = function(e) {
                    return this._checkIfAllDimensionExists(e) ? this.http.get(this._constructAnalyticUrlForExternalSource("", e, "skipData=true")).map(function(e) {
                        return e.json() || null
                    }) : s.Observable.create(function(e) {
                        e.next(null), e.complete()
                    })
                }, e.prototype.mergeAnalyticsCalls = function(e, t, n, a) {
                    var i = this,
                        r = {
                            headers: [],
                            metaData: {
                                names: {},
                                dx: [],
                                pe: [],
                                ou: [],
                                co: []
                            },
                            rows: [],
                            width: 0,
                            height: 0
                        };
                    return e.forEach(function(e) {
                        r.headers = e.headers, i._getArrayFromObject(e.metaData.names).forEach(function(e) {
                            r.metaData.names[e.id] || (r.metaData.names[e.id] = i.replaceName({
                                id: e.id,
                                name: e.value
                            }, a))
                        }), e.metaData.dx.forEach(function(e) {
                            o.includes(r.metaData.dx, e) || r.metaData.dx.push(e)
                        }), e.metaData.ou.forEach(function(e) {
                            o.includes(r.metaData.ou, e) || r.metaData.ou.push(e)
                        }), e.metaData.pe.forEach(function(e) {
                            o.includes(r.metaData.pe, e) || (console.log(e), r.metaData.pe.push(e), r.metaData.names[e] = i.periodService.getPeriodName(e))
                        }), e.metaData.co && e.metaData.co.forEach(function(e) {
                            o.includes(r.metaData.co, e) || r.metaData.co.push(e)
                        });
                        var t = [];
                        n.data.itemList.forEach(function(e) {
                            e.hasOwnProperty("programType") || t.push(e.id)
                        }), r.metaData.dx = t, n.dimensions.forEach(function(e) {
                            "pe" == e.name && (r.metaData.pe = e.value.split(";"), r.metaData.pe.forEach(function(e) {
                                r.metaData.names[e] = i.periodService.getPeriodName(e)
                            }))
                        }), e.rows.forEach(function(e) {
                            r.rows.push(e)
                        })
                    }), new s.Observable(function(e) {
                        i.sortAnalyticsUsingParent(r.metaData.ou).subscribe(function(n) {
                            t && (r.metaData.ou = n), e.next(r)
                        })
                    })
                }, e.prototype.replaceName = function(e, t) {
                    var n = o.keys(t);
                    return o.includes(n, e.id.replace(".", "_")) && (e.name = t[e.id.replace(".", "_")]), e.name
                }, e.prototype.sortAnalyticsUsingParent = function(e) {
                    var t = this;
                    return new s.Observable(function(n) {
                        var a = [];
                        e.forEach(function(i) {
                            t.localStorageService.getByKey(r.b, i).subscribe(function(s) {
                                var l = null;
                                s && s.hasOwnProperty("parent") && (l = s.parent.id), t.localStorageService.getByKey(r.b, l).subscribe(function(t) {
                                    a.push({
                                        id: i,
                                        parent: t.name
                                    }), a.length == e.length && (n.next(o.map(o.sortBy(a, "parent"), "id")), n.complete())
                                }, function(t) {
                                    a.push({
                                        id: i,
                                        parent: ""
                                    }), a.length == e.length && (n.next(o.map(o.sortBy(a, "parent"), "id")), n.complete())
                                })
                            })
                        })
                    })
                }, e.prototype.duplicateAnalytics = function(e, t, n) {
                    var a = o.cloneDeep(e);
                    return a.metaData.dx = [t.id], delete a.metaData.names[n], a.metaData.names[t.id] = t.name, a
                }, e.prototype._getArrayFromObject = function(e) {
                    return o.map(e, function(e, t) {
                        return {
                            id: t,
                            value: e
                        }
                    })
                }, e.prototype._constructAnalyticUrlForExternalSource = function(e, t, n) {
                    var a = "analytics.json?";
                    return t.forEach(function(e, t) {
                        e && e.value && (a += t > 0 ? "&" : "", a += "dimension=" + e.name + ":" + e.value)
                    }), a += "&displayProperty=NAME&hierarchyMeta=true&" + n
                }, e.prototype.getAnalyticsparams = function(e) {
                    var t = "",
                        n = [];
                    return e.dimensions && e.dimensions.forEach(function(e, a) {
                        e && e.value && (t += a > 0 ? "&" : "", t += "dimension=" + e.name + ":" + e.value, n.push.apply(n, e.value.split(";")))
                    }), e.need_functions && e.data.need_functions.forEach(function(e) {
                        t += e.id, n.push(e.id)
                    }), e.data && e.data.auto_growing && e.data.auto_growing.forEach(function(e) {
                        t += e.id, n.push(e.id)
                    }), t
                }, e.prototype._checkIfAllDimensionExists = function(e) {
                    var t = !0;
                    return e.forEach(function(e, n) {
                        e && e.value || (t = !1)
                    }), t
                }, e.prototype.addColumnSubTotal = function(e) {
                    var t = o.cloneDeep(e);
                    if (t.headers && t.headers.length > 1) {
                        var n = t.headers[0].items[0].span,
                            a = [],
                            i = [];
                        return t.headers.forEach(function(e) {
                            var t = [],
                                i = e.items[0].span,
                                o = n - i + 1,
                                r = 1;
                            e.items.forEach(function(e, n) {
                                "total" == e.name || "avg" == e.name ? t.push(e) : (r % o == 0 ? (t.push(e), t.push({
                                    name: "total",
                                    span: 1
                                })) : t.push(e), r++)
                            }), a.push({
                                items: t,
                                style: ""
                            })
                        }), t.rows.forEach(function(e) {
                            var t = 1,
                                a = [],
                                o = 0;
                            e.items.forEach(function(e) {
                                if (e.hasOwnProperty("header")) a.push(e);
                                else {
                                    var i = parseFloat(e.val);
                                    t % n == 0 ? (a.push(e), o += i ? e.val : 0, a.push({
                                        name: "total",
                                        val: +o.toFixed(2),
                                        row_span: 1,
                                        subtotal_column: !0
                                    }), o = 0) : (o += i ? e.val : 0, a.push(e)), t++
                                }
                            }), i.push({
                                items: a,
                                headers: e.headers
                            })
                        }), {
                            headers: a,
                            rows: i,
                            columns: t.columns,
                            titles: t.titles,
                            title: t.title
                        }
                    }
                    return t
                }, e.prototype.addColumnTotal = function(e) {
                    var t = o.cloneDeep(e),
                        n = [],
                        a = [];
                    return t.headers.forEach(function(e) {
                        var t = [];
                        e.items.forEach(function(e) {
                            t.push(e)
                        }), t.push({
                            name: "total",
                            span: 1
                        }), n.push({
                            items: t,
                            style: ""
                        })
                    }), t.rows.forEach(function(e) {
                        var t = [],
                            n = 0;
                        e.items.forEach(function(e) {
                            if (e.hasOwnProperty("header")) t.push(e);
                            else {
                                var a = parseFloat(e.val);
                                e.hasOwnProperty("subtotal_column") || (n += a ? e.val : 0, t.push(e))
                            }
                        }), t.push({
                            name: "total",
                            val: +n.toFixed(2),
                            row_span: 1,
                            column_total: !0,
                            sub_total: !0
                        }), a.push({
                            items: t,
                            headers: e.headers
                        })
                    }), {
                        headers: n,
                        rows: a,
                        columns: t.columns,
                        titles: t.titles,
                        title: t.title
                    }
                }, e.prototype.addColumnAverage = function(e) {
                    var t = o.cloneDeep(e),
                        n = [],
                        a = [];
                    t.headers.forEach(function(e) {
                        var t = [];
                        e.items.forEach(function(e) {
                            t.push(e)
                        }), t.push({
                            name: "avg",
                            span: 1
                        }), n.push({
                            items: t,
                            style: ""
                        })
                    });
                    var i = 0;
                    return t.rows.forEach(function(e) {
                        var t = [],
                            n = 0;
                        i = 0, e.items.forEach(function(e) {
                            if (e.hasOwnProperty("header")) t.push(e);
                            else {
                                var a = parseFloat(e.val);
                                e.hasOwnProperty("subtotal_column") || (i++, n += a ? e.val : 0, t.push(e))
                            }
                        });
                        var o = n / i;
                        t.push({
                            name: "avg",
                            val: +o.toFixed(2),
                            row_span: 1,
                            column_total: !0,
                            sub_total: !0
                        }), a.push({
                            items: t,
                            headers: e.headers
                        })
                    }), {
                        headers: n,
                        rows: a,
                        columns: t.columns,
                        titles: t.titles,
                        title: t.title
                    }
                }, e.prototype.addRowSubtotal = function(e) {
                    var t = o.cloneDeep(e);
                    if (t.columns.length > 1) {
                        var n = t.rows[0].items[0].row_span,
                            a = [],
                            i = 1,
                            r = [];
                        return t.rows.forEach(function(e) {
                            var o = [];
                            if (i % n == 0) {
                                a.push(e);
                                var s = 0;
                                e.items.forEach(function(e) {
                                    e.hasOwnProperty("header") || (r[s] ? r[s] += parseFloat(e.val) ? parseFloat(e.val) : 0 : r[s] = parseFloat(e.val) ? parseFloat(e.val) : 0, s++)
                                });
                                var l = 0;
                                t.rows[0].items.forEach(function(e) {
                                    e.hasOwnProperty("header") ? o.push({
                                        name: "",
                                        val: "",
                                        row_span: 1,
                                        header: !0
                                    }) : (o.push({
                                        name: "",
                                        val: +r[l].toFixed(2),
                                        row_span: 1,
                                        row_total: !0
                                    }), l++)
                                }), a.push({
                                    items: o,
                                    headers: e.headers,
                                    sub_total: !0
                                }), r = []
                            } else {
                                a.push(e);
                                var c = 0;
                                e.items.forEach(function(e) {
                                    e.hasOwnProperty("header") || (r[c] ? r[c] += parseFloat(e.val) ? parseFloat(e.val) : 0 : r[c] = parseFloat(e.val) ? parseFloat(e.val) : 0, c++)
                                })
                            }
                            i++
                        }), {
                            headers: t.headers,
                            rows: a,
                            columns: t.columns,
                            titles: t.titles,
                            title: t.title
                        }
                    }
                    return t
                }, e.prototype.addRowTotal = function(e) {
                    var t = o.cloneDeep(e),
                        n = (t.rows[0].items[0].row_span, []),
                        a = 1,
                        i = [],
                        r = [];
                    t.rows.forEach(function(e) {
                        n.push(e);
                        var t = 0;
                        e.items.forEach(function(e) {
                            e.hasOwnProperty("header") || (i[t] ? i[t] += parseFloat(e.val) ? parseFloat(e.val) : 0 : i[t] = parseFloat(e.val) ? parseFloat(e.val) : 0, t++)
                        }), a++
                    });
                    var s = 0;
                    return t.rows[0].items.forEach(function(e) {
                        e.hasOwnProperty("header") ? r.push({
                            name: "",
                            val: "",
                            row_span: 1,
                            header: !0
                        }) : (r.push({
                            name: "",
                            val: +i[s].toFixed(2),
                            row_span: 1,
                            row_total: !0,
                            sub_total: !0
                        }), s++)
                    }), n.push({
                        items: r,
                        headers: t.rows[0].headers,
                        sub_total: !0
                    }), {
                        headers: t.headers,
                        rows: n,
                        columns: t.columns,
                        titles: t.titles,
                        title: t.title
                    }
                }, e.prototype.addRowAverage = function(e) {
                    var t = o.cloneDeep(e),
                        n = (t.rows[0].items[0].row_span, []),
                        a = 1,
                        i = [],
                        r = [],
                        s = 0;
                    t.rows.forEach(function(e) {
                        n.push(e);
                        var t = 0;
                        e.items.forEach(function(e) {
                            e.hasOwnProperty("header") || (i[t] ? i[t] += parseFloat(e.val) ? parseFloat(e.val) : 0 : i[t] = parseFloat(e.val) ? parseFloat(e.val) : 0, t++)
                        }), a++
                    });
                    var l = 0;
                    return t.rows.forEach(function(e) {
                        e.hasOwnProperty("header") || s++
                    }), t.rows[0].items.forEach(function(e) {
                        if (e.hasOwnProperty("header")) r.push({
                            name: "",
                            val: "",
                            row_span: 1,
                            header: !0
                        });
                        else {
                            var t = i[l] / s;
                            r.push({
                                name: "",
                                val: +t.toFixed(2),
                                row_span: 1,
                                row_total: !0,
                                sub_total: !0
                            }), l++
                        }
                    }), n.push({
                        items: r,
                        headers: t.rows[0].headers,
                        sub_total: !0
                    }), {
                        headers: t.headers,
                        rows: n,
                        columns: t.columns,
                        titles: t.titles,
                        title: t.title
                    }
                }, e.prototype.addParentOu = function(e) {
                    var t = this,
                        n = o.cloneDeep(e),
                        a = [];
                    n.hasParentOu = !0;
                    var i = [];
                    return "ou" == n.columns[0] ? n.rows.forEach(function(e) {
                        "ou" == e.items[0].type && t.localStorageService.getByKey(r.b, e.items[0].name).subscribe(function(n) {
                            n && n.hasOwnProperty("parent") ? t.localStorageService.getByKey(r.b, n.parent.id).subscribe(function(t) {
                                -1 == i.indexOf(t.id) ? e.items.unshift({
                                    type: "",
                                    name: "drHchnPFUa9",
                                    val: t.name,
                                    row_span: e.items[0].row_span,
                                    header: !0
                                }) : e.items.unshift({
                                    type: "",
                                    name: "drHchnPFUa9",
                                    val: "",
                                    row_span: e.items[0].row_span,
                                    header: !0
                                }), i.push(t.id)
                            }) : (e.items.unshift({
                                type: "",
                                name: "drHchnPFUa9",
                                val: "",
                                row_span: e.items[0].row_span,
                                header: !0
                            }), i.push(""))
                        }), a.push(e)
                    }) : (n.rows.forEach(function(e) {
                        e.items.forEach(function(n, a) {
                            "ou" == n.type && t.localStorageService.getByKey(r.b, n.name).subscribe(function(o) {
                                o && o.hasOwnProperty("parent") && t.localStorageService.getByKey(r.b, o.parent.id).subscribe(function(t) {
                                    "ou" != e.items[0].type && (i = []), -1 == i.indexOf(t.id) ? e.items.splice(a, 0, {
                                        type: "",
                                        name: "drHchnPFUa9",
                                        val: t.name,
                                        row_span: n.row_span,
                                        header: !0
                                    }) : e.items.splice(a, 0, {
                                        type: "",
                                        name: "drHchnPFUa9",
                                        val: "",
                                        row_span: n.row_span,
                                        header: !0
                                    }), i.push(t.id)
                                })
                            })
                        }), a.push(e)
                    }), a = n.rows), -1 == n.columns.indexOf("ou") && (n.hasParentOu = !1), n.headers.forEach(function(e) {
                        e.items.forEach(function(e) {
                            "ou" == e.type && t.localStorageService.getByKey(r.b, e.id).subscribe(function(n) {
                                n && n.hasOwnProperty("parent") && t.localStorageService.getByKey(r.b, n.parent.id).subscribe(function(t) {
                                    e.name = t.name + " > " + e.name
                                })
                            })
                        })
                    }), {
                        headers: n.headers,
                        rows: a,
                        columns: n.columns,
                        titles: n.titles,
                        title: n.title,
                        titlesAvailable: n.itlesAvailable,
                        hasParentOu: n.hasParentOu
                    }
                }, e
            }();
        u = d([n.i(a.c)(), p("design:paramtypes", ["function" == typeof(h = void 0 !== i.a && i.a) && h || Object, "function" == typeof(g = void 0 !== c.a && c.a) && g || Object, "function" == typeof(f = void 0 !== l.a && l.a) && f || Object, "function" == typeof(m = void 0 !== r.a && r.a) && m || Object])], u);
        var h, g, f, m
    },
    XhQJ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = [{
            type: "column",
            description: "Column chart",
            icon: "assets/img/column.png"
        }, {
            type: "line",
            description: "Line chart",
            icon: "assets/img/line.png"
        }, {
            type: "area",
            description: "Area chart",
            icon: "assets/img/area.png"
        }, {
            type: "pie",
            description: "Pie chart",
            icon: "assets/img/pie.png"
        }]
    },
    YWx4: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("M4fF"),
            o = (n.n(i), n("WWmu")),
            r = n("WssD"),
            s = n("PVdj"),
            l = n("gBZQ"),
            c = n("Um43"),
            d = n("XRdi"),
            p = n("+Cee"),
            u = n("W3qg"),
            h = n("QweH"),
            g = n("1HCE"),
            f = n("uqvZ"),
            m = n("MgWG"),
            y = n("tFtT"),
            v = n("W4zo");
        n.d(t, "a", function() {
            return x
        });
        var b = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            _ = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            x = function() {
                function e(e, t, n, a, o, s, l, c) {
                    var d = this;
                    this.store = e, this.analyticsService = t, this.dataService = n, this.localDbService = a, this.visualization = o, this.http = s, this.loginRedirectService = l, this.chartVisualizationService = c, this.autoGrowingData = [], this.visualizationObject$ = e.select(r.a), this.dataDimensions$ = e.select(r.b), this.analyticsWithoutData$ = e.select(r.c), this.selectedData$ = e.select(r.d), this.selectedPeriod$ = e.select(r.e), this.selectedPeriodType$ = e.select(r.f), this.selectedPeriodYear$ = e.select(r.g), this.orgunitModel$ = e.select(r.h), this.showTable = !1, this.showAutoGrowingTable = !1, this.hideMonth = !1, this.hideQuarter = !1, this.tableObject = null, this.hiddenDataElements = [], this.systemInfo = {}, this.loadingAutogrowing = !1, this.showDx = !1, this.showOu = !1, this.showPe = !1, this.dataLoadingPercent = 0, this.totalDataRequired = 0, this.loadedData = 0, this.showInfo = !1, this.needForUpdate = !1, this.renamedDataElements = {}, this.combined_analytics = null, this.dataReady = !1, this.errorInNormalDataOccur = !1, this.errorInNormalData = "", this.autogrowingError = {}, this.selected_periods = [], this.allDimensionAvailable = !1, this.currentVisualization = "TABLE", this.chartType = "column", this.chartObject = null, this.updatingStore = !1, this.updatingParcentage = 0, this.updatedStores = 0, this.updatingMetadataMessage = "Updating Metadata", this.showWelcomingMessage = !0, e.select(r.i).subscribe(function(e) {
                        return d.functions = e
                    }), e.select(r.j).subscribe(function(e) {
                        return d.lastAnalyticsParams = e
                    }), e.select(r.k).subscribe(function(e) {
                        return d.options = e
                    }), e.select(r.l).subscribe(function(e) {
                        return d.layout = e
                    }), e.select(r.m).subscribe(function(e) {
                        return d.mappings = e
                    }), e.select(function(e) {
                        return e.uiState
                    }).subscribe(function(e) {
                        return d.uiState = i.cloneDeep(e)
                    }), e.select(r.n).subscribe(function(e) {
                        return d.dimensions = e
                    }), e.select(r.o).subscribe(function(e) {
                        return d.analyticsItems = e
                    })
                }
                return e.prototype.ngOnInit = function() {
                    var e = this;
                    this.dataService.getDataFromLocalDatabase(h.b).subscribe(), this.currentLayout = this.layout, this.dataService.getAllMappings().subscribe(function(t) {
                        e.store.dispatch(new s.u(t))
                    }), this.dataService.getFunctions().subscribe(function(t) {
                        e.store.dispatch(new s.v(t))
                    }), this.dataService.getHiddenDataElements().subscribe(function(t) {
                        t.forEach(function(t) {
                            e.hiddenDataElements.push(t.replace("_", "."))
                        })
                    }), this.dataService.getASytemInfo().subscribe(function(t) {
                        e.systemInfo = t
                    })
                }, e.prototype.setSelectedOrgunit = function(e) {
                    this.selected_orgunits = e.items, this.store.dispatch(new s.w(e)), this.needForUpdate = !(this.lastAnalyticsParams === this.analyticsService.getAnalyticsparams(this.dimensions))
                }, e.prototype.setOrgunitModel = function(e) {
                    this.selected_orgunit_model = e, this.store.dispatch(new s.x(e))
                }, e.prototype.performFunctionCalculations = function(e, t, n, a) {
                    var o = this;
                    if (this.needForUpdate) {
                        var r = a.metaData.pe,
                            l = a.metaData.ou,
                            c = 0;
                        if (r.forEach(function(e) {
                                l.forEach(function(e) {
                                    c++
                                })
                            }), t && this.loadedData++, this.totalDataRequired += e.data.need_functions.length * c, e.dimensions.forEach(function(e) {
                                "pe" === e.name && (e.value = r.join(";"))
                            }), this.analyticsService.analytics_lists = [], t || 0 !== e.data.need_functions.length || this.store.dispatch(new s.y({
                                loading: !1,
                                message: "Loading data, Please wait"
                            })), e.data.need_functions.length > 0) {
                            var d = 0;
                            e.data.need_functions.forEach(function(a) {
                                r.forEach(function(r) {
                                    l.forEach(function(s) {
                                        var l = {
                                                dx: a.id,
                                                ou: s,
                                                pe: r,
                                                success: function(a) {
                                                    d++, o.loadedData++, o.analyticsService.analytics_lists.push(a), d === e.data.need_functions.length * c && (t && o.analyticsService.analytics_lists.push(t), o.analyticsService.mergeAnalyticsCalls(o.analyticsService.analytics_lists, n.showHierarchy, e, o.renamedDataElements).subscribe(function(e) {
                                                        o.combined_analytics = e, o.tableObject = o.prepareTableObject(e, n), o.needForUpdate = !1
                                                    }))
                                                },
                                                error: function(e) {
                                                    o.errorInNormalData = "Error Occurred in fetching data", o.errorInNormalDataOccur = !0, console.log("error")
                                                },
                                                progress: function(e) {
                                                    console.log("progress")
                                                }
                                            },
                                            p = i.find(o.functions, ["id", a.func]);
                                        Function("parameters", p.function)(l)
                                    })
                                })
                            })
                        } else t && (this.analyticsService.analytics_lists.push(t), this.analyticsService.mergeAnalyticsCalls(this.analyticsService.analytics_lists, n.showHierarchy, e, this.renamedDataElements).subscribe(function(e) {
                            o.combined_analytics = e, o.tableObject = o.prepareTableObject(e, n)
                        }))
                    } else this.tableObject = this.prepareTableObject(this.combined_analytics, n)
                }, e.prototype.prepareTableObject = function(e, t) {
                    var n = this.visualization.drawTable(e, t);
                    return n = t.showRowTotal ? this.analyticsService.addRowTotal(n) : n, n = t.showRowAverage ? this.analyticsService.addRowAverage(n) : n, n = t.showColumnAverage ? this.analyticsService.addColumnAverage(n) : n, n = t.showColumnTotal ? this.analyticsService.addColumnTotal(n) : n, n = t.showRowSubtotal ? this.analyticsService.addRowSubtotal(n) : n, n = t.showColumnSubTotal ? this.analyticsService.addColumnSubTotal(n) : n, n = t.showHierarchy ? this.analyticsService.addParentOu(n) : n
                }, e.prototype.loadAutoGrowing = function(e, t) {
                    var n = this;
                    this.autogrowingError = {};
                    var a = t.metaData.pe;
                    t.metaData.ou;
                    this.autoGrowingData = [], this.loadingAutogrowing = !0;
                    0 === e.data.auto_growing.length && (this.loadingAutogrowing = !1), e.data.auto_growing.forEach(function(t) {
                        i.find(e.dimensions, ["name", "ou"]).arrayed_org_units.forEach(function(e) {
                            var o = "";
                            e.forEach(function(e, t) {
                                t > 0 && (o += ";"), o += e.id
                            });
                            var r = {
                                    dx: t.id,
                                    ou: o,
                                    pe: a.join(";"),
                                    success: function(e) {
                                        n.showTable = !0, n.autoGrowingData.push({
                                            analytics: e,
                                            dataId: t.id
                                        }), n.showAutoGrowingTable = !0, n.loadingAutogrowing = !1
                                    },
                                    error: function(e) {
                                        n.autogrowingError[t.id] = !0, console.log("error")
                                    },
                                    progress: function(e) {
                                        console.log("progress")
                                    }
                                },
                                s = i.find(n.functions, ["id", "DDtZTbdxMsQ"]),
                                l = Function("parameters", s.function);
                            l ? l(r) : n.autogrowingError[t.id] = !0
                        })
                    })
                }, e.prototype.setSelectedPeriod = function(e) {
                    this.selected_periods = e.items, this.store.dispatch(new s.z(e)), this.needForUpdate = !(this.lastAnalyticsParams === this.analyticsService.getAnalyticsparams(this.dimensions))
                }, e.prototype.setLayout = function(e) {
                    this.store.dispatch(new s.A(e)), this.updateVisualization()
                }, e.prototype.updateOptions = function(e) {
                    this.store.dispatch(new s.B(e)), this.updateVisualization()
                }, e.prototype.toogleDataArea = function() {
                    this.chartArea && this.chartArea.reDrawChart(), this.store.dispatch(new s.C)
                }, e.prototype.setSelectedData = function(e) {
                    this.renamedDataElements = e.renamedDataElements, this.store.dispatch(new s.D(e)), this.needForUpdate = !(this.lastAnalyticsParams === this.analyticsService.getAnalyticsparams(this.dimensions)), this.hideMonth = e.hideMonth, this.hideQuarter = e.hideQuarter, this.periodComponent && this.periodComponent.resetSelection(e.hideMonth, e.hideQuarter), this.periodComponent1 && this.periodComponent1.resetSelection(e.hideMonth, e.hideQuarter)
                }, e.prototype.allAvailable = function(e) {
                    var t = !0;
                    return 0 !== e.data.itemList.length && 0 !== this.selected_orgunits.length && 0 !== this.selected_periods.length || (t = !1), t
                }, e.prototype.updateTable = function() {
                    var e = this;
                    this.loadedData = 0, this.totalDataRequired = 0, this.errorInNormalData = "", this.errorInNormalDataOccur = !1, this.tableObject = null, this.chartObject = null, this.showTable = !1, this.allDimensionAvailable = this.allAvailable(this.dimensions), this.showWelcomingMessage = !1, this.allDimensionAvailable ? this.needForUpdate && ("" !== this.dimensions.data.selectedData.value && this.totalDataRequired++, this.store.dispatch(new s.y({
                        loading: !0,
                        message: "Loading data, Please wait"
                    })), this.analyticsService.prepareAnalytics(this.layout, this.dimensions.dimensions, !1).subscribe(function(t) {
                        e.loadedData++, e.store.dispatch(new s.E(e.analyticsService.getAnalyticsparams(e.dimensions))), e.analyticsService.current_normal_analytics = t, e.showTable = !0, "TABLE" === e.currentVisualization ? e.tableObject = e.prepareTableObject(t, e.getTableStructre()) : e.chartObject = e.prepareChartObject(t, e.getChartStructure(e.chartType)), e.store.dispatch(new s.y({
                            loading: !1,
                            message: "Loading data, Please wait"
                        })), e.needForUpdate = !1
                    }, function(t) {
                        e.errorInNormalDataOccur = !0, e.errorInNormalData = "Something went wrong while fetching data"
                    })) : this.showTable = !0
                }, e.prototype.prepareChartObject = function(e, t) {
                    return this.chartVisualizationService.drawChart(e, t)
                }, e.prototype.getChartStructure = function(e) {
                    return {
                        renderId: "chart_area",
                        title: "",
                        type: e,
                        subtitle: "",
                        hideTitle: !1,
                        hideSubtitle: !1,
                        showData: !0,
                        hideEmptyRows: !1,
                        hideLegend: !1,
                        cumulativeValues: !1,
                        targetLineValue: void 0,
                        targetLineLabel: "",
                        baseLineValue: void 0,
                        baseLineLabel: "",
                        legendAlign: "",
                        reverseLegend: !1,
                        showLabels: !0,
                        axes: [],
                        sortOrder: 0,
                        percentStackedValues: !1,
                        multiAxisTypes: [],
                        xAxisType: this.layout.rows ? this.layout.rows : ["dx"],
                        yAxisType: this.layout.columns ? this.layout.columns[0] : "ou"
                    }
                }, e.prototype.getTableStructre = function() {
                    return {
                        showColumnTotal: this.options.column_totals,
                        showColumnAverage: this.options.column_avg,
                        showColumnSubTotal: this.options.column_sub_total,
                        showRowTotal: this.options.row_totals,
                        showRowAverage: this.options.row_avg,
                        showRowSubtotal: this.options.row_sub_total,
                        showDimensionLabels: this.options.dimension_labels,
                        hide_zeros: this.options.hide_empty_row,
                        showHierarchy: this.options.show_hierarchy,
                        title: this.options.table_title,
                        rows: this.layout.rows,
                        columns: this.layout.columns,
                        displayList: !1
                    }
                }, e.prototype.openFavorite = function(e) {
                    var t = this;
                    this.setSelectedOrgunit(e.dataDimensions.ou), this.setSelectedData(e.dataDimensions.data), this.setSelectedPeriod(e.dataDimensions.period), this.store.dispatch(new s.A(e.layout)), this.store.dispatch(new s.B(e.options)), setTimeout(function() {
                        t.updateTable()
                    })
                }, e.prototype.updateStore = function() {
                    this.updatedStores = 0, this.updatingStore = !0, this.updateStoreData(h.g), this.updateStoreData(h.c), this.updateStoreData(h.f), this.updateStoreData(h.e), this.updateStoreData(h.d), this.updateStoreData(h.i), this.updateStoreData(h.h)
                }, e.prototype.updateStoreData = function(e) {
                    var t = this;
                    this.localDbService.clearAll(e).subscribe(function() {
                        t.dataService.getDataFromLocalDatabase(e).subscribe(function(n) {
                            t.updatedStores++, t.updatingParcentage = Math.floor(t.updatedStores / 7 * 100);
                            var a = "";
                            a = "indicators" === e ? "Computed Values" : "indicator-groups" === e ? "Computed Values Groups" : "programs" === e ? "Auto Growing" : e, t.updatingMetadataMessage = "Done Updating " + a, 7 === t.updatedStores && (t.updatingStore = !1)
                        }, function(e) {
                            return console.log("Errors")
                        })
                    })
                }, e.prototype.setVisualizationType = function(e) {
                    this.currentVisualization = e, this.updateVisualization()
                }, e.prototype.updateVisualization = function() {
                    var e = this,
                        t = this.analyticsService.current_normal_analytics;
                    this.allDimensionAvailable && (null === t ? (this.needForUpdate = !0, this.updateTable()) : "TABLE" === this.currentVisualization ? this.tableObject = this.prepareTableObject(t, this.getTableStructre()) : (this.showTable = !1, this.chartObject = this.prepareChartObject(t, this.getChartStructure(this.chartType)), setTimeout(function() {
                        e.showTable = !0
                    }, 100)))
                }, e.prototype.updateChartObjectWithNewType = function(e) {
                    this.chartType = e, this.updateVisualization()
                }, e
            }();
        b([n.i(a._7)(l.a), _("design:type", "function" == typeof(w = void 0 !== l.a && l.a) && w || Object)], x.prototype, "periodComponent", void 0), b([n.i(a._7)(l.a), _("design:type", "function" == typeof(A = void 0 !== l.a && l.a) && A || Object)], x.prototype, "periodComponent1", void 0), b([n.i(a._7)(g.a), _("design:type", "function" == typeof(O = void 0 !== g.a && g.a) && O || Object)], x.prototype, "datafilter", void 0), b([n.i(a._7)(y.a), _("design:type", "function" == typeof(E = void 0 !== y.a && y.a) && E || Object)], x.prototype, "chartArea", void 0), x = b([n.i(a._3)({
            selector: "app-root",
            template: n("5xMp"),
            styles: [n("okgc")],
            animations: [n.i(c.i)("heroState", [n.i(c.j)("inactive", n.i(c.h)({
                display: "none"
            })), n.i(c.j)("active", n.i(c.h)({})), n.i(c.k)("inactive => active", n.i(c.l)("100ms")), n.i(c.k)("active => inactive", n.i(c.l)("100ms"))])]
        }), _("design:paramtypes", ["function" == typeof(D = void 0 !== o.b && o.b) && D || Object, "function" == typeof(T = void 0 !== d.a && d.a) && T || Object, "function" == typeof(S = void 0 !== p.a && p.a) && S || Object, "function" == typeof(I = void 0 !== h.a && h.a) && I || Object, "function" == typeof(k = void 0 !== u.a && u.a) && k || Object, "function" == typeof(R = void 0 !== v.a && v.a) && R || Object, "function" == typeof(j = void 0 !== f.a && f.a) && j || Object, "function" == typeof(F = void 0 !== m.a && m.a) && F || Object])], x);
        var w, A, O, E, D, T, S, I, k, R, j, F
    },
    a4ng: function(e, t, n) {
        "use strict";
        var a = n("4YOn"),
            i = n("P2NJ");
        n.d(t, "a", function() {
            return o
        });
        var o = {
            uiState: a.a,
            storeData: i.a
        }
    },
    aAWt: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return r
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            r = function() {
                function e() {
                    this.items = [], this.placeholder = "Select", this.starting_items = [], this.selected_items = [], this.prefix = "", this.prefix_multiple = "", this.hideOptions = !0, this.onSelected = new a.F
                }
                return e.prototype.ngOnInit = function() {
                    var e = this;
                    0 != this.starting_items.length && (0 == this.selected_items.length ? this.selected_items = this.starting_items : this.starting_items.forEach(function(t) {
                        e.selected_items.push(t)
                    }), this.onSelected.emit(this.selected_items))
                }, e.prototype.displayPerTree = function() {
                    this.hideOptions = !this.hideOptions
                }, e.prototype.reset = function() {
                    this.selected_items = [], this.onSelected.emit(this.selected_items)
                }, e.prototype.checkItemAvailabilty = function(e, t) {
                    for (var n = !1, a = 0, i = t; a < i.length; a++) {
                        i[a].id == e.id && (n = !0)
                    }
                    return n
                }, e.prototype.selectItem = function(e) {
                    this.checkItemAvailabilty(e, this.selected_items) ? this.selected_items.splice(this.selected_items.indexOf(e), 1) : this.selected_items.push(e), this.onSelected.emit(this.selected_items)
                }, e.prototype.deActivateNode = function(e, t) {
                    this.selected_items.splice(this.selected_items.indexOf(e), 1), this.onSelected.emit(this.selected_items), t.stopPropagation()
                }, e
            }();
        i([n.i(a.O)(), o("design:type", Array)], r.prototype, "items", void 0), i([n.i(a.O)(), o("design:type", String)], r.prototype, "placeholder", void 0), i([n.i(a.O)(), o("design:type", Array)], r.prototype, "starting_items", void 0), i([n.i(a.O)(), o("design:type", Array)], r.prototype, "selected_items", void 0), i([n.i(a.O)(), o("design:type", String)], r.prototype, "prefix", void 0), i([n.i(a.O)(), o("design:type", String)], r.prototype, "prefix_multiple", void 0), i([n.i(a._2)(), o("design:type", "function" == typeof(s = void 0 !== a.F && a.F) && s || Object)], r.prototype, "onSelected", void 0), r = i([n.i(a._3)({
            selector: "app-multiselect",
            template: n("gO9+"),
            styles: [n("LEfX")]
        }), o("design:paramtypes", [])], r);
        var s
    },
    at7S: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return r
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            r = function() {
                function e(e) {
                    this.element = e, this._allowDrag = !0
                }
                return e.prototype.ngOnInit = function() {
                    this._allowDrag && (this.element.nativeElement.style.position = "relative", this.element.nativeElement.className += " cursor-draggable")
                }, e.prototype.onMouseDown = function(e) {
                    2 === e.button || void 0 !== this._handle && e.target !== this._handle || (this.md = !0, this.topStart = e.clientY - this.element.nativeElement.style.top.replace("px", ""), this.leftStart = e.clientX - this.element.nativeElement.style.left.replace("px", ""))
                }, e.prototype.onMouseUp = function(e) {
                    this.md = !1
                }, e.prototype.onMouseMove = function(e) {
                    this.md && this._allowDrag && (this.element.nativeElement.style.top = e.clientY - this.topStart + "px", this.element.nativeElement.style.left = e.clientX - this.leftStart + "px")
                }, e.prototype.onMouseLeave = function(e) {
                    this.md = !1
                }, e.prototype.onTouchStart = function(e) {
                    this.md = !0, this.topStart = e.changedTouches[0].clientY - this.element.nativeElement.style.top.replace("px", ""), this.leftStart = e.changedTouches[0].clientX - this.element.nativeElement.style.left.replace("px", ""), e.stopPropagation()
                }, e.prototype.onTouchEnd = function() {
                    this.md = !1
                }, e.prototype.onTouchMove = function(e) {
                    this.md && this._allowDrag && (this.element.nativeElement.style.top = e.changedTouches[0].clientY - this.topStart + "px", this.element.nativeElement.style.left = e.changedTouches[0].clientX - this.leftStart + "px"), e.stopPropagation()
                }, Object.defineProperty(e.prototype, "allowDrag", {
                    set: function(e) {
                        this._allowDrag = e, this._allowDrag ? this.element.nativeElement.className += " cursor-draggable" : this.element.nativeElement.className = this.element.nativeElement.className.replace(" cursor-draggable", "")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "ng2DraggableHandle", {
                    set: function(e) {
                        this._handle = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }();
        i([n.i(a._5)("mousedown", ["$event"]), o("design:type", Function), o("design:paramtypes", [Object]), o("design:returntype", void 0)], r.prototype, "onMouseDown", null), i([n.i(a._5)("document:mouseup", ["$event"]), o("design:type", Function), o("design:paramtypes", [Object]), o("design:returntype", void 0)], r.prototype, "onMouseUp", null), i([n.i(a._5)("document:mousemove", ["$event"]), o("design:type", Function), o("design:paramtypes", [Object]), o("design:returntype", void 0)], r.prototype, "onMouseMove", null), i([n.i(a._5)("document:mouseleave", ["$event"]), o("design:type", Function), o("design:paramtypes", [Object]), o("design:returntype", void 0)], r.prototype, "onMouseLeave", null), i([n.i(a._5)("touchstart", ["$event"]), o("design:type", Function), o("design:paramtypes", [Object]), o("design:returntype", void 0)], r.prototype, "onTouchStart", null), i([n.i(a._5)("document:touchend", ["$event"]), o("design:type", Function), o("design:paramtypes", []), o("design:returntype", void 0)], r.prototype, "onTouchEnd", null), i([n.i(a._5)("document:touchmove", ["$event"]), o("design:type", Function), o("design:paramtypes", [Object]), o("design:returntype", void 0)], r.prototype, "onTouchMove", null), i([n.i(a.O)("ng2-draggable"), o("design:type", Boolean), o("design:paramtypes", [Boolean])], r.prototype, "allowDrag", null), i([n.i(a.O)(), o("design:type", Object), o("design:paramtypes", [Object])], r.prototype, "ng2DraggableHandle", null), r = i([n.i(a.J)({
            selector: "[ng2-draggable]"
        }), o("design:paramtypes", ["function" == typeof(s = void 0 !== a.M && a.M) && s || Object])], r);
        var s
    },
    "atc/": function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return r
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            r = function() {
                function e() {
                    this.showLayout = !1, this.options = {
                        column_totals: !1,
                        row_totals: !1,
                        column_sub_total: !1,
                        row_sub_total: !1,
                        row_avg: !1,
                        column_avg: !1,
                        dimension_labels: !1,
                        hide_empty_row: !1,
                        show_hierarchy: !1,
                        table_title: ""
                    }, this.onOptionUpdate = new a.F
                }
                return e.prototype.ngOnInit = function() {}, e.prototype.updateOption = function() {
                    this.onOptionUpdate.emit(this.options), this.showLayout = !1
                }, e
            }();
        i([n.i(a.O)(), o("design:type", Object)], r.prototype, "options", void 0), i([n.i(a.O)(), o("design:type", String)], r.prototype, "currentVisualization", void 0), i([n.i(a._2)(), o("design:type", "function" == typeof(s = void 0 !== a.F && a.F) && s || Object)], r.prototype, "onOptionUpdate", void 0), r = i([n.i(a._3)({
            selector: "app-options",
            template: n("B3/R"),
            styles: [n("QOa8")]
        }), o("design:paramtypes", [])], r);
        var s
    },
    c51d: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return r
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            r = function() {
                function e(e) {
                    this._elementRef = e, this.clickOutside = new a.F
                }
                return e.prototype.onClick = function(e) {
                    this._elementRef.nativeElement.contains(e) || this.clickOutside.emit(!0)
                }, e
            }();
        i([n.i(a._2)(), o("design:type", Object)], r.prototype, "clickOutside", void 0), i([n.i(a._5)("document:click", ["$event.target"]), o("design:type", Function), o("design:paramtypes", [Object]), o("design:returntype", void 0)], r.prototype, "onClick", null), r = i([n.i(a.J)({
            selector: "[appClickOutside]"
        }), o("design:paramtypes", ["function" == typeof(s = void 0 !== a.M && a.M) && s || Object])], r);
        var s
    },
    cl25: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("BDm9");
        n.n(i);
        n.d(t, "a", function() {
            return r
        });
        var o = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            r = function() {
                function e() {}
                return e.prototype.transform = function(e, t, n) {
                    if (n) {
                        if ("" != n.trim()) {
                            return new i(e, t).search(n)
                        }
                        return e
                    }
                    return e
                }, e
            }();
        r = o([n.i(a.Y)({
            name: "fuseSearch"
        })], r)
    },
    d6xq: function(e, t) {
        e.exports = '<span appClickOutside (clickOutside)="showLayout = false">\n\n<a class="btn btn-default layout-toggle-btn" title="Click to change layout of non auto-growing tables" (click)="showLayout = !showLayout">\n  \x3c!--<img src="assets/img/layout.png" height="15"/>--\x3e\n  Layout\n</a>\n<div style="position: absolute; margin-top: 10px;">\n  <div *ngIf="showLayout" class="layout-block" [ng2-draggable]="true" [ng2DraggableHandle]="elementreference">\n    <div #elementreference style="padding:6px;margin-bottom: 6px;border-bottom: 1px solid rgba(0,0,0,0.1); cursor: move">\n      <label >Table Layout</label>\n    </div>\n    <div *ngIf="layoutType == \'table\'">\n      <div class="col-sm-12" style="padding-left: 5px;padding-right: 5px">\n        <table class="table table-bordered" style="height: 250px">\n          <tr >\n            \x3c!--<td rowspan="2" dnd-droppable (onDropSuccess)="onDrop($event,\'excluded\')">--\x3e\n              \x3c!--<div>--\x3e\n                \x3c!--<label>Excluded dimension</label>--\x3e\n              \x3c!--</div>--\x3e\n              \x3c!--<div class="draggable" dnd-draggable [dragEnabled]="true" *ngFor="let dimension of layout.excluded" [dragData]="{data: dimension, dimension: \'excluded\'}"><span [ngClass]="icons[dimension]"></span> {{names[dimension]}}</div>--\x3e\n            \x3c!--</td>--\x3e\n            <td dnd-droppable (onDropSuccess)="onDrop($event,\'filters\')" class="dimension-drops">\n              <div>\n                <label>Filters</label>\n              </div>\n              <div class="draggable" dnd-draggable [dragEnabled]="true" *ngFor="let dimension of layout.filters" [dragData]="{data: dimension, dimension: \'filters\'}"><span [ngClass]="icons[dimension]"></span> {{names[dimension]}}</div>\n            </td>\n            <td dnd-droppable (onDropSuccess)="onDrop($event,\'columns\')" class="dimension-drops">\n              <div>\n                <label>Column / Y axis</label>\n              </div>\n              <div class="draggable" dnd-draggable [dragEnabled]="true" *ngFor="let dimension of layout.columns" [dragData]="{data: dimension, dimension: \'columns\'}"><span [ngClass]="icons[dimension]"></span> {{names[dimension]}}</div>\n            </td>\n          </tr>\n          <tr>\n            <td dnd-droppable (onDropSuccess)="onDrop($event,\'rows\')" class="dimension-drops">\n              <div>\n                <label>Rows / X axis</label>\n              </div>\n              <div class="draggable" dnd-draggable [dragEnabled]="true" *ngFor="let dimension of layout.rows" [dragData]="{data: dimension, dimension: \'rows\'}"><span [ngClass]="icons[dimension]"></span> {{names[dimension]}}</div>\n            </td>\n            <td class="dimension-drops"></td>\n          </tr>\n          \x3c!--<thead><tr><th width="33%">Column</th><th width="33%">Row</th><th width="33%">Filter</th></tr></thead>--\x3e\n          \x3c!--<tbody>--\x3e\n          \x3c!--<tr>--\x3e\n            \x3c!----\x3e\n            \x3c!----\x3e\n\n          \x3c!--</tr>--\x3e\n          \x3c!--<tr>--\x3e\n\n          \x3c!--</tr>--\x3e\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div *ngIf="layoutType == \'chart\'">\n      <div class="col-sm-12">\n        <label>Chart Layout</label>\n        <table class="table table-bordered">\n          <thead><tr><th width="33%">Category</th><th width="33%">Series</th><th width="33%">Filter</th></tr></thead>\n          <tbody><tr>\n            <td dnd-droppable (onDropSuccess)="onDrop($event,\'category\')">\n              <div class="draggable" dnd-draggable [dragEnabled]="true" *ngIf="layout.category != \'\'" [dragData]="{data: layout.category, dimension: \'category\'}"><i [ngClass]="icons[layout.category]" class="fa"></i> {{names[layout.category]}}</div>\n            </td>\n            <td dnd-droppable (onDropSuccess)="onDrop($event,\'series\')">\n              <div class="draggable" dnd-draggable [dragEnabled]="true" *ngIf="layout.series != \'\'" [dragData]="{data: layout.series, dimension: \'series\'}"><i [ngClass]="icons[layout.series]" class="fa"></i> {{names[layout.series]}}</div>\n            </td>\n            <td dnd-droppable (onDropSuccess)="onDrop($event,\'filters\')">\n              <div class="draggable" dnd-draggable [dragEnabled]="true" *ngFor="let dimension of layout.filters" [dragData]="{data: dimension, dimension: \'filters\'}"><i [ngClass]="icons[dimension]" class="fa"></i> {{names[dimension]}}</div>\n            </td>\n          </tr></tbody>\n        </table>\n      </div>\n    </div>\n    <div class="col-sm-12">\n      <div class="pull-right">\n        <button class="btn btn-default btn-sm" (click)="updateLayout()"><i class="fa fa-refresh"></i>Update</button>\n        <button class="btn btn-default btn-sm" (click)="showLayout= false"><i class="fa fa-times"></i>Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n</span>\n'
    },
    fV8N: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return o
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = function() {
                function e() {}
                return e.prototype.transform = function(e, t) {
                    return e && !isNaN(e) ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : e
                }, e
            }();
        o = i([n.i(a.Y)({
            name: "thouthandSepator"
        })], o)
    },
    gBZQ: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("W4zo");
        n.d(t, "a", function() {
            return l
        });
        var o = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            r = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            s = [{
                value: "Monthly",
                name: "Monthly",
                shown: !0
            }, {
                value: "BiMonthly",
                name: "BiMonthly",
                shown: !1
            }, {
                value: "Quarterly",
                name: "Quarterly",
                shown: !0
            }, {
                value: "SixMonthly",
                name: "Six-Monthly",
                shown: !1
            }, {
                value: "SixMonthlyApril",
                name: "Six-Monthly April",
                shown: !1
            }, {
                value: "Yearly",
                name: "Yearly",
                shown: !0
            }, {
                value: "FinancialApril",
                name: "Financial-April",
                shown: !1
            }, {
                value: "FinancialJuly",
                name: "Financial-July",
                shown: !0
            }, {
                value: "FinancialOct",
                name: "Financial-Oct",
                shown: !1
            }, {
                value: "RelativeMonth",
                name: "Relative Month",
                shown: !0
            }, {
                value: "RelativeQuarter",
                name: "Relative Quarter",
                shown: !0
            }, {
                value: "RelativeYear",
                name: "Relative Year",
                shown: !0
            }, {
                value: "RelativeFinancialYear",
                name: "Relative Financial Year",
                shown: !0
            }],
            l = function() {
                function e(e) {
                    this.http = e, this.period_tree_config = {
                        show_search: !1,
                        search_text: "Search",
                        level: null,
                        loading: !1,
                        loading_message: "Loading Periods...",
                        multiple: !1,
                        multiple_key: "none",
                        starting_periods: [],
                        starting_year: null,
                        placeholder: "Select period"
                    }, this.hideMonth = !1, this.hideQuarter = !1, this.selected_periods = [], this.starting_year = (new Date).getFullYear(), this.onPeriodUpdate = new a.F, this.onYearUpdate = new a.F, this.onTypeUpdate = new a.F, this.periods = [], this.period = {}, this.showPerTree = !1, this.year = (new Date).getFullYear(), this.default_period = [];
                    var t = new Date;
                    t.setDate(0), this.period_tree_config.starting_year = t.getFullYear(), this.year = this.period_tree_config.starting_year ? this.period_tree_config.starting_year : t.getFullYear();
                    var n = t.getFullYear() + ("0" + (t.getMonth() + 1)).slice(-2);
                    this.period_tree_config.starting_periods = [n], this.period_tree_config.hasOwnProperty("multiple_key") || (this.period_tree_config.multiple_key = "none"), this.getSystemSettings().subscribe(function(e) {})
                }
                return e.prototype.getSystemSettings = function() {
                    return this.http.getRow("25/systemSettings").map(function(e) {
                        return e.json() || {}
                    })
                }, e.prototype.ngOnInit = function() {
                    this.period_type_config = s, "" !== this.period_type && this.changePeriodType()
                }, e.prototype.transferDataSuccess = function(e, t) {
                    if (e.dragData.id == t.id);
                    else {
                        var n = this.getPeriodPosition(e.dragData.id) > this.getPeriodPosition(t.id) ? 0 : 1;
                        this.deletePeriod(e.dragData), this.insertPeriod(e.dragData, t, n)
                    }
                }, e.prototype.selectAllItems = function() {
                    var e = this;
                    this.periods.forEach(function(t) {
                        e.checkPeriodAvailabilty(t, e.selected_periods) || e.selected_periods.push(t)
                    })
                }, e.prototype.deselectAllItems = function() {
                    this.selected_periods = []
                }, e.prototype.getPeriodPosition = function(e) {
                    var t = null;
                    return this.selected_periods.forEach(function(n, a) {
                        n.id == e && (t = a)
                    }), t
                }, e.prototype.deletePeriod = function(e) {
                    var t = this;
                    this.selected_periods.forEach(function(n, a) {
                        e.id == n.id && t.selected_periods.splice(a, 1)
                    })
                }, e.prototype.insertPeriod = function(e, t, n) {
                    var a = this;
                    this.selected_periods.forEach(function(i, o) {
                        t.id != i.id || a.checkPeriodAvailabilty(e, a.selected_periods) || a.selected_periods.splice(o + n, 0, e)
                    })
                }, e.prototype.pushPeriodForward = function() {
                    this.year += 1, this.periods = this.getPeriodArray(this.period_type, this.year), this.onYearUpdate.emit(this.year)
                }, e.prototype.pushPeriodBackward = function() {
                    this.year -= 1, this.periods = this.getPeriodArray(this.period_type, this.year), this.onYearUpdate.emit(this.year)
                }, e.prototype.changePeriodType = function() {
                    this.periods = this.getPeriodArray(this.period_type, this.year), this.onTypeUpdate.emit(this.period_type)
                }, e.prototype.deactivatePer = function(e) {
                    this.selected_periods.splice(this.selected_periods.indexOf(e), 1), this.onPeriodUpdate.emit({
                        items: this.selected_periods,
                        type: this.period_type,
                        starting_year: this.starting_year,
                        name: "pe",
                        value: this.getPeriodsForAnalytics(this.selected_periods)
                    })
                }, e.prototype.activatePer = function(e) {
                    this.checkPeriodAvailabilty(e, this.selected_periods) || (this.selected_periods.push(e), this.onPeriodUpdate.emit({
                        items: this.selected_periods,
                        type: this.period_type,
                        starting_year: this.starting_year,
                        name: "pe",
                        value: this.getPeriodsForAnalytics(this.selected_periods)
                    }))
                }, e.prototype.getPeriodsForAnalytics = function(e) {
                    var t = "";
                    return e.forEach(function(e, n) {
                        t += 0 == n ? e.id : ";" + e.id
                    }), t
                }, e.prototype.checkPeriodAvailabilty = function(e, t) {
                    for (var n = !1, a = 0, i = t; a < i.length; a++) {
                        i[a].id == e.id && (n = !0)
                    }
                    return n
                }, e.prototype.resetSelection = function(e, t) {
                    e || t || "Quarterly" == this.period_type || "FinancialJuly" == this.period_type || "Yearly" == this.period_type ? (e && !t && "FinancialJuly" != this.period_type && this.period_type, this.period_type = "QuarterlyA") : this.period_type = "QuarterlyA", this.periods = this.getPeriodArray(this.period_type, this.year)
                }, e.prototype.getPeriodArray = function(e, t) {
                    var n = [],
                        a = parseInt(t + 1);
                    return "Weekly" == e ? n.push({
                        id: "",
                        name: ""
                    }) : "QuarterlyA" == e ? n.push({
                        id: t + "12",
                        name: "October - December " + t
                    }, {
                        id: t + "09",
                        name: "July - September " + t
                    }, {
                        id: t + "06",
                        name: "April - June " + t
                    }, {
                        id: t + "03",
                        name: "January - March " + t,
                        selected: !0
                    }) : "QuarterlyB" == e ? n.push({
                        id: t + "Q4",
                        name: "November " + t + " - January " + a
                    }, {
                        id: t + "10",
                        name: "August - October " + t
                    }, {
                        id: t + "07",
                        name: "May - July " + t
                    }, {
                        id: t + "04",
                        name: "February - April " + t,
                        selected: !0
                    }) : "QuarterlyC" == e && n.push({
                        id: a + "02",
                        name: "December " + t + " - February " + a
                    }, {
                        id: t + "11",
                        name: "September - November " + t
                    }, {
                        id: t + "08",
                        name: "June - August " + t
                    }, {
                        id: t + "05",
                        name: "March - May " + t,
                        selected: !0
                    }), n
                }, e.prototype.getLastPeriod = function(e, t) {
                    if (void 0 === t && (t = "Quarterly"), "Weekly" == t);
                    else {
                        if ("Monthly" == t) {
                            var n = e.substring(0, 4),
                                a = e.substring(4, 6),
                                i = "";
                            if ("02" == a) i = n + "01";
                            else if ("03" == a) i = n + "02";
                            else if ("04" == a) i = n + "03";
                            else if ("05" == a) i = n + "04";
                            else if ("06" == a) i = n + "05";
                            else if ("07" == a) i = n + "06";
                            else if ("08" == a) i = n + "07";
                            else if ("09" == a) i = n + "08";
                            else if ("10" == a) i = n + "09";
                            else if ("11" == a) i = n + "10";
                            else if ("12" == a) i = n + "11";
                            else if ("01" == a) {
                                var o = parseInt(n) - 1;
                                i = o + "12"
                            }
                            return i
                        }
                        if ("BiMonthly" == t) {
                            var n = e.substring(0, 4),
                                a = e.substring(4, 6),
                                i = "";
                            if ("02" == a) i = n + "01B";
                            else if ("03" == a) i = n + "02B";
                            else if ("04" == a) i = n + "03B";
                            else if ("05" == a) i = n + "04B";
                            else if ("06" == a) i = n + "05B";
                            else if ("01" == a) {
                                var o = parseInt(n) - 1;
                                i = o + "06B"
                            }
                            return i
                        }
                        if ("Quarterly" == t) {
                            var n = e.substring(0, 4),
                                r = e.substring(4, 6),
                                i = "";
                            if ("Q4" == r) i = n + "Q3";
                            else if ("Q3" == r) i = n + "Q2";
                            else if ("Q2" == r) i = n + "Q1";
                            else if ("Q1" == r) {
                                var o = parseInt(n) - 1;
                                i = o + "Q4"
                            }
                            return i
                        }
                        if ("SixMonthly" == t) {
                            var n = e.substring(0, 4),
                                s = e.substring(4, 6),
                                i = "";
                            if ("S1" == s) {
                                var o = parseInt(n) - 1;
                                i = o + "S2"
                            } else "S2" == s && (i = n + "S1");
                            return i
                        }
                        if ("SixMonthlyApril" == t) {
                            var n = e.substring(0, 4),
                                s = e.substring(4, 12),
                                i = "";
                            if ("AprilS2" == s) i = n + "AprilS1";
                            else if ("AprilS1" == s) {
                                var o = parseInt(n) - 1;
                                i = o + "AprilS2"
                            }
                            return i
                        }
                        if ("FinancialOct" == t) {
                            var n = e.substring(0, 4),
                                l = parseInt(n) - 1;
                            return l + "Oct"
                        }
                        if ("Yearly" == t) return parseInt(e) - 1;
                        if ("FinancialJuly" == t) {
                            var n = e.substring(0, 4),
                                l = parseInt(n) - 1;
                            return l + "July"
                        }
                        if ("FinancialApril" == t) {
                            var n = e.substring(0, 4),
                                l = parseInt(n) - 1;
                            return l + "April"
                        }
                    }
                }, e.prototype.getNextPeriod = function(e, t) {
                    if (void 0 === t && (t = "Quarterly"), "Weekly" == t);
                    else {
                        if ("Monthly" == t) {
                            var n = e.substring(0, 4),
                                a = e.substring(4, 6),
                                i = "";
                            if ("02" == a) i = n + "03";
                            else if ("03" == a) i = n + "04";
                            else if ("04" == a) i = n + "05";
                            else if ("05" == a) i = n + "06";
                            else if ("06" == a) i = n + "07";
                            else if ("07" == a) i = n + "08";
                            else if ("08" == a) i = n + "09";
                            else if ("09" == a) i = n + "10";
                            else if ("10" == a) i = n + "11";
                            else if ("11" == a) i = n + "12";
                            else if ("12" == a) {
                                var o = parseInt(n) + 1;
                                i = o + "01"
                            } else "01" == a && (i = n + "02");
                            return i
                        }
                        if ("BiMonthly" == t) {
                            var n = e.substring(0, 4),
                                a = e.substring(4, 6),
                                i = "";
                            if ("02" == a) i = n + "03B";
                            else if ("03" == a) i = n + "04B";
                            else if ("04" == a) i = n + "05B";
                            else if ("05" == a) i = n + "06B";
                            else if ("06" == a) {
                                var o = parseInt(n) + 1;
                                i = o + "01B"
                            } else "01" == a && (i = n + "02B");
                            return i
                        }
                        if ("Quarterly" == t) {
                            var n = e.substring(0, 4),
                                r = e.substring(4, 6),
                                i = "";
                            if ("Q1" == r) i = n + "Q2";
                            else if ("Q3" == r) i = n + "Q4";
                            else if ("Q2" == r) i = n + "Q3";
                            else if ("Q4" == r) {
                                var o = parseInt(n) + 1;
                                i = o + "Q1"
                            }
                            return i
                        }
                        if ("SixMonthly" == t) {
                            var n = e.substring(0, 4),
                                s = e.substring(4, 6),
                                i = "";
                            if ("S2" == s) {
                                var o = parseInt(n) + 1;
                                i = o + "S1"
                            } else "S1" == s && (i = n + "S2");
                            return i
                        }
                        if ("SixMonthlyApril" == t) {
                            var n = e.substring(0, 4),
                                s = e.substring(4, 12),
                                i = "";
                            if ("AprilS2" == s) {
                                var o = parseInt(n) + 1;
                                i = o + "AprilS1"
                            } else "AprilS1" == s && (i = n + "AprilS2");
                            return i
                        }
                        if ("FinancialOct" == t) {
                            var n = e.substring(0, 4),
                                l = parseInt(n) + 1;
                            return l + "Oct"
                        }
                        if ("Yearly" == t) return parseInt(e) + 1;
                        if ("FinancialJuly" == t) {
                            var n = e.substring(0, 4),
                                l = parseInt(n) + 1;
                            return l + "July"
                        }
                        if ("FinancialApril" == t) {
                            var n = e.substring(0, 4),
                                l = parseInt(n) + 1;
                            return l + "April"
                        }
                    }
                }, e.prototype.updatePeriodType = function() {
                    this.selected_periods = [], this.changePeriodType()
                }, e
            }();
        o([n.i(a.O)(), r("design:type", Object)], l.prototype, "period_tree_config", void 0), o([n.i(a.O)(), r("design:type", Boolean)], l.prototype, "hideMonth", void 0), o([n.i(a.O)(), r("design:type", Boolean)], l.prototype, "hideQuarter", void 0), o([n.i(a.O)(), r("design:type", Array)], l.prototype, "selected_periods", void 0), o([n.i(a.O)(), r("design:type", String)], l.prototype, "period_type", void 0), o([n.i(a.O)(), r("design:type", Number)], l.prototype, "starting_year", void 0), o([n.i(a._2)(), r("design:type", "function" == typeof(c = void 0 !== a.F && a.F) && c || Object)], l.prototype, "onPeriodUpdate", void 0), o([n.i(a._2)(), r("design:type", "function" == typeof(d = void 0 !== a.F && a.F) && d || Object)], l.prototype, "onYearUpdate", void 0), o([n.i(a._2)(), r("design:type", "function" == typeof(p = void 0 !== a.F && a.F) && p || Object)], l.prototype, "onTypeUpdate", void 0), l = o([n.i(a._3)({
            selector: "[app-period-filter]",
            template: n("R/Vl"),
            styles: [n("xEWg")]
        }), r("design:paramtypes", ["function" == typeof(u = void 0 !== i.a && i.a) && u || Object])], l);
        var c, d, p, u
    },
    "gO9+": function(e, t) {
        e.exports = '<div class="tree-input" appClickOutside (clickOutside)="hideOptions = true">\n  <div class="show_items" (click)="displayPerTree()">\n    <span *ngIf="selected_items.length == 1">{{ prefix }}</span>\n    <span *ngIf="selected_items.length > 1">{{ prefix_multiple }}</span>\n    <span *ngIf="selected_items.length > 3">\n      <span class="selected-item">\n        {{ selected_items[0].name }}\n        <a (click)="deActivateNode(selected_items[0],$event)" class="removeitem" >x</a>\n      </span>\n      <span class="selected-item">\n        {{ selected_items[1].name }}\n        <a (click)="deActivateNode(selected_items[1],$event)" class="removeitem">x</a>\n      </span>\n      <span class="selected-item">\n        &nbsp; and {{ selected_items.length - 2 }} more\n      </span>\n    </span>\n    <span *ngIf="selected_items.length <= 3">\n       <span *ngFor="let item of selected_items" class="selected-item ng-binding ng-scope">\n        {{ item.name }}\n         <a (click)="deActivateNode(item,$event)" class="removeitem">x</a>\n      </span>\n    </span>\n    <span *ngIf="selected_items.length == 0">\n      {{ placeholder }}\n    </span>\n    <span class="glyphicon glyphicon-triangle-bottom pull-right text-muted"></span>\n  </div>\n  <div class="tree-view" [ngClass]="{\'hiddenTree\':hideOptions}">\n    <ul class="nav nav-pills nav-stacked">\n      <li *ngFor="let item of items"\n          class="period" (click)="selectItem(item)"\n          [ngClass]="{\'selected\': checkItemAvailabilty(item,selected_items)}"\n          title="Click to select"\n      >\n        {{ item.name }}\n      </li>\n    </ul>\n  </div>\n</div>\n'
    },
    j8YU: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return r
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            r = function() {
                function e() {
                    this.root_url = "../../../", this.api = this.root_url + "api/25/", this.chartTypes = [{
                        type: "column",
                        description: "Column chart",
                        icon: "assets/img/bar.png"
                    }, {
                        type: "line",
                        description: "Line chart",
                        icon: "assets/img/line.png"
                    }, {
                        type: "combined",
                        description: "Combined chart",
                        icon: "assets/img/combined.png"
                    }, {
                        type: "bar",
                        description: "Bar chart",
                        icon: "assets/img/column.png"
                    }, {
                        type: "area",
                        description: "Area chart",
                        icon: "assets/img/area.png"
                    }, {
                        type: "pie",
                        description: "Pie chart",
                        icon: "assets/img/pie.png"
                    }, {
                        type: "stacked_column",
                        description: "stacked column chart",
                        icon: "assets/img/column-stacked.png"
                    }, {
                        type: "gauge",
                        description: "Gauge chart",
                        icon: "assets/img/gauge.jpg"
                    }, {
                        type: "radar",
                        description: "Radar chart",
                        icon: "assets/img/radar.png"
                    }]
                }
                return e
            }();
        r = i([n.i(a.c)(), o("design:paramtypes", [])], r)
    },
    kZql: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
            production: !0
        }
    },
    lRnG: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("j8YU"),
            o = n("W4zo");
        n.d(t, "a", function() {
            return l
        });
        var r = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            s = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            l = function() {
                function e(e, t) {
                    this.constant = e, this.http = t
                }
                return e.prototype.getAnalytics = function(e, t, n, a) {
                    void 0 === n && (n = []), void 0 === a && (a = !1);
                    var i = a ? this._constructAnalyticUrlForExternalSource(e) : this._constructAnalyticUrl(e, t, n);
                    return this.http.get(i)
                }, e.prototype._constructAnalyticUrlForExternalSource = function(e) {
                    var t = "analytics.json?";
                    return e.forEach(function(e, n) {
                        t += n > 0 ? "&" : "", t += "dimension=" + e.name + ":" + e.value
                    }), t += "&displayProperty=NAME"
                }, e.prototype._constructAnalyticUrl = function(e, t, n) {
                    var a = this.constant.api + "analytics",
                        i = this._getDimension("rows", e, n),
                        o = this._getDimension("columns", e, n),
                        r = this._getDimension("filters", e, n);
                    return "EVENT_CHART" == t ? a += "/events/aggregate/" + this._getProgramParameters(e) : "EVENT_REPORT" == t ? e.hasOwnProperty("dataType") ? "AGGREGATED_VALUES" == e.dataType ? a += "/events/aggregate/" + this._getProgramParameters(e) : a += "/events/query/" + this._getProgramParameters(e) : console.warn("No dataType attribute found for event report") : "EVENT_MAP" == t ? a += "/events/aggregate/" + this._getProgramParameters(e) : "MAP" == t && "event" == e.layer ? (a += "/events/query/" + this._getProgramParameters(e), e.hasOwnProperty("startDate") && e.hasOwnProperty("endDate") && (a += "startDate=" + e.startDate + "&endDate=" + e.endDate + "&")) : a += ".json?", a += i + "&" + o + "&" + r, a += "&displayProperty=NAME" + t == "EVENT_CHART" ? "&outputType=EVENT&" : "EVENT_REPORT" == t ? "&outputType=EVENT&displayProperty=NAME" : "EVENT_MAP" == t ? "&outputType=EVENT&displayProperty=NAME" : "&displayProperty=NAME", a += "event" == e.layer ? "&coordinatesOnly=true" : ""
                }, e.prototype._getProgramParameters = function(e) {
                    var t = "";
                    return e.hasOwnProperty("program") && e.hasOwnProperty("programStage") ? e.program.hasOwnProperty("id") && e.programStage.hasOwnProperty("id") ? t = e.program.id + ".json?stage=" + e.programStage.id + "&" : console.warn("Missing program and/or program stage identifiers") : console.warn("Program and/or program stage not available"), t
                }, e.prototype._getDimension = function(e, t, n) {
                    var a = this,
                        i = "";
                    return t.hasOwnProperty(e) ? t[e].forEach(function(t) {
                        if (i += "" != i ? "&" : "", t.hasOwnProperty("dimension") && "dy" != t.dimension) {
                            if (i += "filters" == e ? "filter=" : "dimension=", i += t.dimension, i += t.hasOwnProperty("legendSet") ? "-" + t.legendSet.id : "", i += ":", i += t.hasOwnProperty("filter") ? t.filter : "", t.hasOwnProperty("items") && t.items.length > 0) {
                                var o = a._getCustomDimensionValue(n, t.dimension);
                                null != o ? i += o + ";" : t.items.forEach(function(e, n) {
                                    i += e.dimensionItem ? e.dimensionItem : "", i += n == t.items.length - 1 ? "" : ";"
                                })
                            }
                        } else console.warn("Dimension object is not present")
                    }) : console.warn("Specified dimension does not exist on this object"), i
                }, e.prototype._getCustomDimensionValue = function(e, t) {
                    var n = null;
                    if (void 0 != e && e.length > 0)
                        for (var a = 0, i = e; a < i.length; a++) {
                            var o = i[a];
                            if (o.name === t) {
                                n = o.value;
                                break
                            }
                        }
                    return n
                }, e
            }();
        l = r([n.i(a.c)(), s("design:paramtypes", ["function" == typeof(c = void 0 !== i.a && i.a) && c || Object, "function" == typeof(d = void 0 !== o.a && o.a) && d || Object])], l);
        var c, d
    },
    nSQ8: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("Gvdl"),
            o = (n.n(i), n("Gvdl")),
            r = (n.n(o), n("W4zo"));
        n.d(t, "a", function() {
            return c
        });
        var s = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            l = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            c = function() {
                function e(e) {
                    this.http = e, this.nodes = null, this.orgunit_levels = [], this.user_orgunits = [], this.orgunit_groups = [], this.initial_orgunits = []
                }
                return e.prototype.getUserInformation = function(e) {
                    return void 0 === e && (e = null), 0 == e ? this.http.getRow("me.json?fields=dataViewOrganisationUnits[id,name,level],organisationUnits[id,name,level]").map(function(e) {
                        return e.json()
                    }).catch(this.handleError) : this.http.getRow("me.json?fields=organisationUnits[id,name,level]").map(function(e) {
                        return e.json()
                    }).catch(this.handleError)
                }, e.prototype.getuserOrganisationUnitsWithHighestlevel = function(e, t) {
                    var n = [];
                    return t.hasOwnProperty("dataViewOrganisationUnits") ? 0 == t.dataViewOrganisationUnits.length ? t.organisationUnits.forEach(function(t) {
                        t.level == e && n.push(t.id)
                    }) : (e = t.dataViewOrganisationUnits[0].level, t.dataViewOrganisationUnits.forEach(function(t) {
                        t.level == e && n.push(t.id)
                    })) : t.organisationUnits.forEach(function(t) {
                        t.level == e && n.push(t.id)
                    }), n
                }, e.prototype.getUserHighestOrgUnitlevel = function(e) {
                    var t;
                    return e.hasOwnProperty("dataViewOrganisationUnits") ? 0 == e.dataViewOrganisationUnits.length ? (t = e.organisationUnits[0].level, e.organisationUnits.forEach(function(e) {
                        e.level <= t && (t = e.level)
                    })) : (t = e.dataViewOrganisationUnits[0].level, e.dataViewOrganisationUnits.forEach(function(e) {
                        e.level <= t && (t = e.level)
                    })) : (t = e.organisationUnits[0].level, e.organisationUnits.forEach(function(e) {
                        e.level <= t && (t = e.level)
                    })), t
                }, e.prototype.getUserOrgUnits = function(e) {
                    var t = [];
                    return e.hasOwnProperty("dataViewOrganisationUnits") ? 0 == e.dataViewOrganisationUnits.length ? e.organisationUnits.forEach(function(e) {
                        t.push(e)
                    }) : e.dataViewOrganisationUnits.forEach(function(e) {
                        t.push(e)
                    }) : e.organisationUnits.forEach(function(e) {
                        t.push(e)
                    }), t
                }, e.prototype.prepareOrgunits = function(e) {
                    var t = this;
                    void 0 === e && (e = null), this.getOrgunitLevelsInformation().subscribe(function(n) {
                        t.orgunit_levels = n.organisationUnitLevels, t.getUserInformation(e).subscribe(function(e) {
                            t.user_orgunits = t.getUserOrgUnits(e);
                            var a = t.getUserHighestOrgUnitlevel(e),
                                i = n.pager.total,
                                o = t.getuserOrganisationUnitsWithHighestlevel(a, e),
                                r = parseInt(i) - (parseInt(a) - 1),
                                s = t.generateUrlBasedOnLevels(r);
                            t.getAllOrgunitsForTree1(s, o).subscribe(function(e) {
                                t.nodes = e.organisationUnits
                            })
                        })
                    }), this.getOrgunitGroups().subscribe(function(e) {
                        t.orgunit_groups = e.organisationUnitGroups
                    })
                }, e.prototype.generateUrlBasedOnLevels = function(e) {
                    for (var t = "[]", n = 1; n < e + 1; n++) t = t.replace("[]", "[id,name,level,children[]]");
                    var a = t.substring(1);
                    return a = a.replace(",children[]]", "")
                }, e.prototype.getOrgunitLevelsInformation = function() {
                    var e = this;
                    return o.Observable.create(function(t) {
                        0 != e.orgunit_levels.length ? (t.next(e.orgunit_levels), t.complete()) : e.http.getRow("organisationUnitLevels.json?fields=id,name,level&order=level:asc").map(function(e) {
                            return e.json()
                        }).catch(e.handleError).subscribe(function(n) {
                            e.orgunit_levels = n, t.next(e.orgunit_levels), t.complete()
                        }, function(e) {
                            t.error("some error occur")
                        })
                    })
                }, e.prototype.getOrgunitGroups = function() {
                    var e = this;
                    return o.Observable.create(function(t) {
                        0 != e.orgunit_groups.length ? (t.next(e.orgunit_groups), t.complete()) : e.http.getRow("organisationUnitGroups.json?fields=id,name&paging=false").map(function(e) {
                            return e.json()
                        }).catch(e.handleError).subscribe(function(n) {
                            e.orgunit_groups = n.organisationUnitGroups, t.next(e.orgunit_groups), t.complete()
                        }, function(e) {
                            t.error("some error occur")
                        })
                    })
                }, e.prototype.getAllOrgunitsForTree = function(e) {
                    return this.http.getRow("organisationUnits.json?filter=level:eq:1&paging=false&fields=" + e).map(function(e) {
                        return e.json()
                    }).catch(this.handleError)
                }, e.prototype.getAllOrgunitsForTree1 = function(e, t) {
                    var n = this;
                    return void 0 === e && (e = null), void 0 === t && (t = null), o.Observable.create(function(a) {
                        null != n.nodes ? (a.next(n.nodes), a.complete()) : n.http.getRow("organisationUnits.json?fields=" + e + "&filter=id:in:[" + t.join(",") + "]&paging=false").map(function(e) {
                            return e.json()
                        }).catch(n.handleError).subscribe(function(e) {
                            n.nodes = e.organisationUnits, a.next(n.nodes), a.complete()
                        }, function(e) {
                            a.error("some error occured")
                        })
                    })
                }, e.prototype.getInitialOrgunitsForTree = function(e) {
                    var t = this;
                    return o.Observable.create(function(n) {
                        null != t.initial_orgunits ? (n.next(t.initial_orgunits), n.complete()) : t.http.getRow("organisationUnits.json?fields=id,name,level,children[id,name]&filter=id:in:[" + e.join(",") + "]&paging=false").map(function(e) {
                            return e.json()
                        }).catch(t.handleError).subscribe(function(e) {
                            t.initial_orgunits = e.organisationUnits, n.next(t.initial_orgunits), n.complete()
                        }, function(e) {
                            n.error("some error occured")
                        })
                    })
                }, e.prototype.handleError = function(e) {
                    return o.Observable.throw(e)
                }, e
            }();
        c = s([n.i(a.c)(), l("design:paramtypes", ["function" == typeof(d = void 0 !== r.a && r.a) && d || Object])], c);
        var d
    },
    okgc: function(e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, ".data-filter{width:28%}.data-filter,.data-view{float:left;position:relative}.data-view{width:72%}.data-view-full{float:left;width:100%;position:relative}.top-bar{min-height:40px;height:50px;border-radius:0;border-left-style:none;border-right-style:none;background-color:#fff}.data-component-area{border-style:none;margin-bottom:0;margin-top:0}.left-block,.right-block{border:1px solid #eee;border-bottom-style:none;min-height:100vh;padding:0}.right-block{border-left-style:none;padding-left:5px}.new-favorite-link{padding:3px!important;margin-top:5px;color:#fff!important}.new-favorite-link:hover{color:#fff!important;background-color:#286090!important;border-color:#204d74!important}.favorite-input{border-style:none;margin-top:4px;padding:3px;font-size:15px;border:1px solid #f5f5f5}.favorite-input:focus{outline:none}.favorite-list{left:5px;top:40px;width:400px;position:absolute;top:100%;left:0;z-index:1000;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:14px;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175)}.favorite-list .panel-footer,.favorite-list .panel-heading{height:30px;background-color:#fff}.close-right-area{color:#000}.hideData{display:none}.dropdownField{position:absolute;margin-top:10px;padding-top:10px;border:1px solid rgba(0,0,0,.3);width:400px;z-index:100;background-color:#f5f5f5}@media print{.right-block{width:100%}}.top-bar-link{margin-right:5px}.top-bar-link>li>a{padding:4px;margin-left:2px;margin-right:2px;height:30px}.top-bar-link>li>a:hover{background-color:#eee}.top-bar-link>li>a img{height:14px}.visualization-footer-nav>li>a{transition:all .2s ease-in-out;font-size:13px;border-radius:23px;margin-bottom:2px;margin-top:2px;margin-right:3px;cursor:pointer;height:40px;width:40px;border:1px solid #e0ecfc;background-color:hsla(0,0%,100%,.8);padding-left:7px;padding-top:6px}.visualization-footer-nav>li>a img{height:25px}.visualization-footer-nav>li>a:hover{-webkit-transform:scale(1.2);transform:scale(1.2);background-color:#e0ecfc}.visualization-btn-holder{position:absolute;right:10px;top:0}.filter-btn{transition:all .2s ease-in-out;font-size:13px;border-radius:23px;margin-bottom:2px;margin-top:2px;margin-right:3px;cursor:pointer;height:35px;width:35px;border:1px solid #e0ecfc;background-color:hsla(0,0%,100%,.8);padding-left:5px;padding-top:6px}.filter-btn:hover{-webkit-transform:scale(1.2);transform:scale(1.2);background-color:#e0ecfc}.filter-btn img{height:25px}.filter-dimensions-btn{transition:all .2s ease-in-out;margin-top:2px;border-radius:20px}.filter-dimensions-btn:hover{-webkit-transform:scale(1.1);transform:scale(1.1);background-color:#e0ecfc}.active-visualization-filter{background-color:#e0ecfc!important}.visualization-update-holder{position:absolute;bottom:10px;right:0}", ""]), e.exports = e.exports.toString()
    },
    pY5w: function(e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, ".custom-table>tbody>tr>td,.custom-table>thead>tr>th{font-size:12px!important}", ""]), e.exports = e.exports.toString()
    },
    rPc3: function(e, t, n) {
        "use strict";
        var a = n("3j3K");
        n.d(t, "a", function() {
            return r
        });
        var i = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            o = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            r = function() {
                function e() {
                    this._visualizationObjects = []
                }
                return e.prototype.find = function(e) {
                    var t = null;
                    if (this._visualizationObjects.length > 0)
                        for (var n = 0, a = this._visualizationObjects; n < a.length; n++) {
                            var i = a[n];
                            if (i.id == e) {
                                t = i;
                                break
                            }
                        }
                    return t
                }, e.prototype.all = function() {
                    return this._visualizationObjects.length > 0 ? this._visualizationObjects : []
                }, e.prototype.createOrUpdate = function(e) {
                    var t = this._visualizationObjects.filter(function(t) {
                        return t.id == e.id
                    });
                    0 == t.length ? this._visualizationObjects.push(e) : this._visualizationObjects[this._visualizationObjects.indexOf(t[0])] = e
                }, e
            }();
        r = i([n.i(a.c)(), o("design:paramtypes", [])], r)
    },
    rj5B: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("3j3K"),
            __WEBPACK_IMPORTED_MODULE_1__services_excel_download_service__ = __webpack_require__("TzTL"),
            __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__ = __webpack_require__("QweH"),
            __WEBPACK_IMPORTED_MODULE_3__services_period_service__ = __webpack_require__("SNFC");
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return AutoGrowingComponent
        });
        var __decorate = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            __metadata = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                };
        HTMLCollection.prototype.sort = function(e) {
            var t = Array.prototype.slice.call(this);
            t.sort(e);
            for (var n = 0, a = t.length; n < a; n++) {
                var i = t[n].parentNode,
                    o = i.removeChild(t[n]);
                i.appendChild(o)
            }
        }, HTMLCollection.prototype.forEach = function(e) {
            var t = Array.prototype.slice.call(this);
            t.forEach(e);
            for (var n = 0, a = t.length; n < a; n++) {
                var i = t[n].parentNode,
                    o = i.removeChild(t[n]);
                i.appendChild(o)
            }
        }, Element.prototype.remove = function() {
            this.parentElement && this.parentElement.removeChild(this)
        }, NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
            for (var e = this.length - 1; e >= 0; e--) this[e] && this[e].parentElement && this[e].parentElement.removeChild(this[e])
        };
        var AutoGrowingComponent = function() {
            function AutoGrowingComponent(e, t, n) {
                this.localDbService = e, this.excelDownloadService = t, this.periodService = n, this.autogrowing = null, this.dataItems = null, this.layoutItems = {
                    rows: ["pe"],
                    columns: ["dx"],
                    filters: ["ou"],
                    excluded: ["co"]
                }, this.title = "", this.tableObject = null, this.loadingPercent = 0, this.dataField = "data", this.show = !1, this.error = !1
            }
            return AutoGrowingComponent.prototype.ngOnInit = function() {
                var e = this;
                if (this.autogrowing) {
                    this.autogrowing.analytics.merge.config.dataElements.unshift("eventdate"), this.autogrowing.analytics.merge.config.groupBy.unshift("eventdate"), this.autogrowing.analytics.merge.config.dataElementsDetails.unshift({
                        id: "eventdate",
                        name: "Period",
                        formName: "Period",
                        valueType: "TEXT",
                        aggregationType: "NONE"
                    }), this.autogrowing.analytics.merge.config.dataElements.unshift("ouname"), this.autogrowing.analytics.merge.config.groupBy.unshift("ouname"), this.autogrowing.analytics.merge.config.dataElementsDetails.unshift({
                        id: "ouname",
                        name: "Organisation unit name",
                        formName: "Organisation unit name",
                        valueType: "TEXT",
                        aggregationType: "NONE"
                    }), this.autogrowing.analytics.merge.config.dataElementsDetails.forEach(function(e, t) {
                        e.sortOrder = t
                    }), this.$scope = this.autogrowing.analytics.merge, this.loadingPercent = 20;
                    var t = [];
                    this.autogrowing.analytics.merge.config.data || (this.dataField = "otherData"), this.autogrowing.analytics.merge.config[this.dataField].forEach(function(e) {
                        -1 == t.indexOf(e["Organisation unit"]) && t.push(e["Organisation unit"])
                    }), this.localDbService.getByKeys("organisation-units", t).subscribe(function(t) {
                        var n = [];
                        e.autogrowing.analytics.metaData.pe.forEach(function(a) {
                            e.autogrowing.analytics.metaData.names[a] = e.periodService.getPeriodName(a), e.autogrowing.analytics.metaData.ou.forEach(function(i) {
                                e.autogrowing.analytics.merge.config[e.dataField].forEach(function(o) {
                                    t.some(function(t) {
                                        if (o["Organisation unit"] == t.id && e.periodService.isDateInPeriod(o["Event date"], a)) return t.path.indexOf(i) > -1 && (o.Period = e.periodService.getPeriodName(e.periodService.convertDateToPeriod(o["Event date"], e.periodService.getPeriodType(a))), o["Organisation unit name"] = e.autogrowing.analytics.metaData.names[i], n.push(o)), !0
                                    })
                                })
                            })
                        }), e.autogrowing.analytics.merge.config.data = n, e.controller(), e.loadingPercent = 40, setTimeout(e.mergingCallBack())
                    })
                }
            }, AutoGrowingComponent.prototype.getOrganisationUnits = function(e) {}, AutoGrowingComponent.prototype.dynamicSort = function(e) {
                return function(t, n) {
                    return t.children[e] || n.children[e] ? t.children[e] ? n.children[e] ? t.children[e].innerHTML.trim().toLowerCase() > n.children[e].innerHTML.trim().toLowerCase() ? 1 : t.children[e].innerHTML.trim().toLowerCase() < n.children[e].innerHTML.trim().toLowerCase() ? -1 : 0 : 1 : -1 : 0
                }
            }, AutoGrowingComponent.prototype.dynamicSortMultiple = function(e) {
                var t = this;
                return function(n, a) {
                    for (var i = 0, o = 0; 0 === o && i < e.length;) o = t.dynamicSort(e[i])(n, a), i++;
                    return o
                }
            }, AutoGrowingComponent.prototype.mergingCallBack = function() {
                var _this = this;
                return function() {
                    try {
                        var elem_1 = _this.tbody.nativeElement,
                            dataElementIndexes_1 = [];
                        _this.$scope.config.groupBy.forEach(function(e, t) {
                            _this.$scope.data.dataElements.forEach(function(e, n) {
                                _this.$scope.config.groupBy[t] == e.id && dataElementIndexes_1.push(n)
                            })
                        }), elem_1.children.sort(_this.dynamicSortMultiple(dataElementIndexes_1));
                        for (var firstColumnBrakes = [], toFixed = [], adjacentToGroup_1 = function(e, t) {
                            var n = "";
                            return dataElementIndexes_1.forEach(function(t) {
                                elem_1.children.forEach(function(a, i) {
                                    if (a.children[t]) {
                                        var o = a.children[t];
                                        e == i && (n += $(o).html().trim().toLowerCase())
                                    }
                                })
                            }), n
                        }, range_1 = 50 / _this.$scope.data.dataElements.length, i = 0; i < _this.$scope.data.dataElements.length; i++) {
                            var dataIndex = i,
                                previous = null,
                                previousFromFirst = null,
                                cellToExtend = null,
                                rowspan = 1;
                            _this.$scope.config.groupBy.indexOf(_this.$scope.data.dataElements[dataIndex].id) > -1 ? _this.elementFind(elem_1, i, function(e, t) {
                                previous == $(t).text().trim().toLowerCase() && -1 === $.inArray(e, firstColumnBrakes) ? ($(t).addClass("hidden"), cellToExtend.attr("rowspan", rowspan += 1)) : (-1 === $.inArray(e, firstColumnBrakes) && firstColumnBrakes.push(e), rowspan = 1, previous = $(t).text().trim().toLowerCase(), cellToExtend = $(t))
                            }) : elem_1.children.forEach(function(trElement, index) {
                                if (trElement.children[i]) {
                                    var el = trElement.children[i];
                                    if (previous == adjacentToGroup_1(index, i)) {
                                        if ($(el).addClass("hidden"), _this.$scope.config.valueTypes && ("min" == _this.$scope.config.valueTypes[_this.$scope.config.dataElements[i - 1]] || "max" == _this.$scope.config.valueTypes[_this.$scope.config.dataElements[i - 1]])) return void cellToExtend.attr("rowspan", rowspan += 1);
                                        var firstValue = cellToExtend.html(),
                                            secondValue = $(el).html(),
                                            firstValueSet = !1,
                                            secondValueSet = !1;
                                        "" == firstValue && (firstValue = 0, firstValueSet = !0), "" == secondValue && (secondValue = 0, secondValueSet = !0);
                                        try {
                                            _this.$scope.config.valueTypes ? "int" == _this.$scope.config.valueTypes[_this.$scope.config.dataElements[i]] ? cellToExtend.html(eval("(" + firstValue + " + " + secondValue + ")")) : "min" == _this.$scope.config.valueTypes[_this.$scope.config.dataElements[i]] || "max" == _this.$scope.config.valueTypes[_this.$scope.config.dataElements[i]] || cellToExtend.html(eval("(" + firstValue + " + " + secondValue + ")").toFixed(1)) : _this.$scope.config.list ? _this.$scope.config.list == _this.$scope.config.dataElements[i] ? -1 == firstValue.indexOf(secondValue) && cellToExtend.html(firstValue + "<br /> " + secondValue) : cellToExtend.html(eval("(" + firstValue + " + " + secondValue + ")").toFixed(1)) : "AVERAGE" == _this.$scope.config.dataElementsDetails[i].aggregationType ? cellToExtend.html(eval("(" + firstValue + " + " + secondValue + ")")) : cellToExtend.html(eval("(" + firstValue + " + " + secondValue + ")").toFixed(1))
                                        } catch (e) {}
                                        cellToExtend.attr("rowspan", rowspan += 1)
                                    } else rowspan = 1, previous = adjacentToGroup_1(index, i).trim().toLowerCase(), cellToExtend = $(el)
                                }
                            }), setTimeout(function() {
                                _this.loadingPercent += range_1
                            })
                        }
                        if (_this.$scope.config.dataElements.forEach(function(e, t) {
                                _this.$scope.config.dataElementsDetails.forEach(function(n, a) {
                                    n.id == e && "AVERAGE" == n.aggregationType && elem_1.children.forEach(function(e, n) {
                                        e.children[t] && (e.children[t].innerText = (parseFloat(e.children[t].innerText) / e.children[t].rowSpan).toFixed(1))
                                    })
                                })
                            }), _this.$scope.config.valueTypes)
                            for (var i = 1; i <= _this.$scope.data.dataElements.length; i++) _this.elementFind(elem_1, i, function(e, t) {
                                if (("min" == _this.$scope.config.valueTypes[_this.$scope.config.dataElements[i]] || "max" == _this.$scope.config.valueTypes[_this.$scope.config.dataElements[i]]) && null != $(t).attr("rowspan"))
                                    for (var n = e + 1; n <= e + ($(t).attr("rowspan") - 1); n++) {
                                        var a = parseFloat($(elem_1.children[e].children[i]).html()),
                                            o = parseFloat($(elem_1.children[n].children[i]).html());
                                        "min" == _this.$scope.config.valueTypes[_this.$scope.config.dataElements[i]] && a > o && $(elem_1.children[e].children[i]).html(o.toFixed(1)), "max" == _this.$scope.config.valueTypes[_this.$scope.config.dataElements[i]] && a < o && $(elem_1.children[e].children[i]).html(o.toFixed(1))
                                    }
                            });
                        if (_this.$scope.config.dec)
                            for (var i = 1; i <= _this.$scope.data.dataElements.length; i++) _this.elementFind(elem_1, i, function(e, t) {
                                _this.$scope.config.dec == _this.$scope.config.dataElements[i] && $(elem_1.children[e].children[i]).html(parseFloat($(elem_1.children[e].children[i]).html()).toFixed(1))
                            });
                        _this.$scope.config.groupAdd && (firstColumnBrakes = [], _this.$scope.config.groupAdd.forEach(function(e) {
                            _this.$scope.data.dataElements.forEach(function(t, n) {
                                e == t.id && _this.elementFind(elem_1, n, function(e, t) {
                                    if (null != elem_1.children[e].children[n - 1].getAttribute("rowspan")) {
                                        var a = parseInt(elem_1.children[e].children[n - 1].getAttribute("rowspan"));
                                        elem_1.children[e].children[n].setAttribute("rowspan", a);
                                        for (var i = "", o = 1; o < a; o++) elem_1.children[e + o].children[n + 1].innerHTML == i || $(elem_1.children[e + o].children[n]).hasClass("hidden") || (elem_1.children[e].children[n].innerHTML = (parseFloat(elem_1.children[e].children[n].innerHTML) + parseFloat(elem_1.children[e + o].children[n].innerHTML)).toFixed(1)), $(elem_1.children[e + o].children[n]).addClass("hidden"), i = elem_1.children[e + o].children[n + 1].innerHTML
                                    }
                                })
                            })
                        })), _this.$scope.config.indicators && (_this.$scope.config.indicators.forEach(function(e) {
                            e.position && _this.$scope.config.dataElements.splice(e.position + 2, 0, e.position + 2)
                        }), elem_1.children.forEach(function(trElement, trIndex) {
                            _this.$scope.config.indicators.forEach(function(indicator) {
                                var eventIndicator = "(" + indicator.numerator + ")/(" + indicator.denominator + ")";
                                _this.$scope.data.dataElements.forEach(function(e) {
                                    if (eventIndicator.indexOf(e.id) > -1) {
                                        var t = _this.$scope.config.dataElements.indexOf(e.id),
                                            n = trElement.children[t].innerText;
                                        eventIndicator = eventIndicator.replace("#{" + e.id + "}", n)
                                    }
                                });
                                var valueCalculated = eval("(" + eventIndicator + ")").toFixed(1);
                                isNaN(valueCalculated) && (valueCalculated = ""), trElement.children[indicator.position + 2].innerText = valueCalculated
                            })
                        })), toFixed.forEach(function(e) {
                            e.html(parseFloat(e.html()).toFixed(1))
                        }), _this.loadingPercent = 100, _this.show = !0
                    } catch (e) {
                        _this.error = !0, _this.show = !0
                    }
                }
            }, AutoGrowingComponent.prototype.elementFind = function(e, t, n) {
                e.children.forEach(function(e, a) {
                    e.children[t] && n(a, e.children[t])
                })
            }, AutoGrowingComponent.prototype.controller = function() {
                var _this = this;
                if (this.$scope.data = {
                        dataElements: [],
                        events: []
                    }, this.$scope.getDataElementName = function(e) {
                        var t = "";
                        return _this.$scope.config.dataElementsDetails.forEach(function(n) {
                            n.id == e && (t = n.name)
                        }), t
                    }, this.$scope.config.cumulativeToDate) {
                    var addDataElements = [],
                        addedIndexes = 0;
                    this.$scope.config.cumulativeToDate.forEach(function(e) {
                        _this.$scope.config.dataElementsDetails.forEach(function(t, n) {
                            e.after == t.id && (addDataElements.push({
                                dataElement: {
                                    id: t.id + n,
                                    name: t.name + n,
                                    valueType: t.valueType
                                },
                                index: n + 1 + addedIndexes
                            }), addedIndexes++)
                        })
                    }), addDataElements.forEach(function(e) {
                        _this.$scope.config.dataElementsDetails.splice(e.index, 0, e.dataElement), _this.$scope.config.dataElements.splice(e.index, 0, e.dataElement.id)
                    })
                }
                var averagingOccurences = {};
                this.$scope.config.valueTypes && this.$scope.config.dataElementsDetails.forEach(function(e) {
                    "int" == _this.$scope.config.valueTypes[e.id] && _this.$scope.config.data.forEach(function(t) {
                        var n = parseInt(t[e.name]);
                        isNaN(n) && (n = 0), t[e.name] = n + ""
                    })
                }), this.$scope.config.dataElements.forEach(function(e) {
                    _this.$scope.config.dataElementsDetails && _this.$scope.config.dataElementsDetails.forEach(function(t, n) {
                        t.id == e && (_this.$scope.data.dataElements.push(t), "AVERAGE" == t.aggregationType && (_this.$scope.config.data.forEach(function(e) {
                            averagingOccurences[e[_this.$scope.config.dataElementsDetails[0].name]] ? averagingOccurences[e[_this.$scope.config.dataElementsDetails[0].name]]++ : averagingOccurences[e[_this.$scope.config.dataElementsDetails[0].name]] = 1
                        }), _this.$scope.config.data.forEach(function(e) {})))
                    })
                }), this.$scope.config.groupBy ? (this.$scope.foundDataValues = {}, this.$scope.config.groupBy.forEach(function(e, t) {
                    0 == t && _this.$scope.config.data.forEach(function(e) {
                        _this.$scope.data.events.push(e)
                    })
                }), this.$scope.config.fourthQuarter && this.$scope.config.otherData && this.$scope.config.groupBy.forEach(function(e, t) {
                    0 == t && _this.$scope.config.otherData.forEach(function(e) {
                        _this.$scope.data.events.push(e)
                    })
                })) : (this.$scope.data.events = [], this.$scope.config.data.forEach(function(eventData) {
                    if (_this.$scope.config.cumulativeToDate) {
                        var eventName = _this.$scope.getDataElementName(_this.$scope.config.dataElements[0]);
                        _this.$scope.config.otherData.forEach(function(otherEvent) {
                            otherEvent[eventName] == eventData[eventName] && _this.$scope.config.cumulativeToDate.forEach(function(cDataElement) {
                                _this.$scope.config.dataElements.forEach(function(dataElementId, index) {
                                    if (-1 != dataElementId.indexOf(cDataElement.dataElement) && cDataElement.dataElement.length < dataElementId.length) {
                                        var otherDataEventName = _this.$scope.getDataElementName(dataElementId),
                                            initialOtherDataEventName = _this.$scope.getDataElementName(cDataElement.dataElement);
                                        eventData[otherDataEventName] ? eventData[otherDataEventName] = eval("(" + eventData[otherDataEventName] + "+" + otherEvent[initialOtherDataEventName] + ")").toFixed(1) + "" : eventData[otherDataEventName] = otherEvent[initialOtherDataEventName]
                                    }
                                })
                            })
                        })
                    }
                    _this.$scope.data.events.push(eventData)
                })), this.$scope.config.indicators && this.$scope.config.indicators.forEach(function(indicator, index) {
                    _this.$scope.data.dataElements.splice(indicator.position + 2, 0, {
                        name: indicator.name,
                        formName: indicator.name,
                        valueType: "NUMBER"
                    }), _this.$scope.data.events.forEach(function(event) {
                        var eventIndicator = "(" + indicator.numerator + ")/(" + indicator.denominator + ")";
                        _this.$scope.data.dataElements.forEach(function(e) {
                            if (eventIndicator.indexOf(e.id) > -1) {
                                var t = "0";
                                event[e.name] && (t = event[e.name]), eventIndicator = eventIndicator.replace("#{" + e.id + "}", t)
                            }
                        });
                        try {
                            event[indicator.name] = eval("(" + eventIndicator + ")")
                        } catch (e) {}
                    })
                })
            }, AutoGrowingComponent.prototype.checkHide = function(e) {
                return !!this.$scope.config.hide && this.$scope.config.hide.indexOf(e) > -1
            }, AutoGrowingComponent.prototype.downloadExcel = function(e) {
                var t = this,
                    n = new Date,
                    a = n.getDate();
                a < 10 && (a = "0" + a);
                var i = n.getMonth() + 1;
                i < 10 && (i = "0" + i);
                var o = this.autogrowing.analytics.metaData.names[this.$scope.config.programId] + " ";
                this.autogrowing.analytics.metaData.ou.forEach(function(e, n) {
                    n > 0 && (o += ","), o += t.autogrowing.analytics.metaData.names[e]
                }), this.autogrowing.analytics.metaData.pe.forEach(function(e, n) {
                    t.autogrowing.analytics.metaData.names[e] && (n > 0 && (o += ","), o += t.autogrowing.analytics.metaData.names[e])
                }), o += " downloaded_on_" + a + "-" + i + "-" + n.getFullYear(), this.excelDownloadService.download(o, this[e].nativeElement)
            }, AutoGrowingComponent
        }();
        __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.O)(), __metadata("design:type", Object)], AutoGrowingComponent.prototype, "autogrowing", void 0), __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.O)(), __metadata("design:type", Object)], AutoGrowingComponent.prototype, "dataItems", void 0), __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.O)(), __metadata("design:type", Object)], AutoGrowingComponent.prototype, "layoutItems", void 0), __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__.O)(), __metadata("design:type", String)], AutoGrowingComponent.prototype, "title", void 0), __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._7)("tbody"), __metadata("design:type", "function" == typeof(_a = void 0 !== __WEBPACK_IMPORTED_MODULE_0__angular_core__.M && __WEBPACK_IMPORTED_MODULE_0__angular_core__.M) && _a || Object)], AutoGrowingComponent.prototype, "tbody", void 0), __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._7)("autogrowingTable"), __metadata("design:type", "function" == typeof(_b = void 0 !== __WEBPACK_IMPORTED_MODULE_0__angular_core__.M && __WEBPACK_IMPORTED_MODULE_0__angular_core__.M) && _b || Object)], AutoGrowingComponent.prototype, "autogrowingTable", void 0), __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._7)("autogrowingRawTable"), __metadata("design:type", "function" == typeof(_c = void 0 !== __WEBPACK_IMPORTED_MODULE_0__angular_core__.M && __WEBPACK_IMPORTED_MODULE_0__angular_core__.M) && _c || Object)], AutoGrowingComponent.prototype, "autogrowingRawTable", void 0), AutoGrowingComponent = __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__._3)({
            selector: "app-auto-growing",
            template: __webpack_require__("7shM"),
            styles: [__webpack_require__("1qAp")]
        }), __metadata("design:paramtypes", ["function" == typeof(_d = void 0 !== __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__.a && __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__.a) && _d || Object, "function" == typeof(_e = void 0 !== __WEBPACK_IMPORTED_MODULE_1__services_excel_download_service__.a && __WEBPACK_IMPORTED_MODULE_1__services_excel_download_service__.a) && _e || Object, "function" == typeof(_f = void 0 !== __WEBPACK_IMPORTED_MODULE_3__services_period_service__.a && __WEBPACK_IMPORTED_MODULE_3__services_period_service__.a) && _f || Object])], AutoGrowingComponent);
        var _a, _b, _c, _d, _e, _f
    },
    tFtT: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("XhQJ");
        n.d(t, "a", function() {
            return s
        });
        var o = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            r = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            s = function() {
                function e() {
                    this.onChartTypeChange = new a.F, this._chartTypes = i.a, this.showOptions = !0, this.layoutItems = {
                        rows: ["pe"],
                        columns: ["dx"],
                        filters: ["ou"],
                        excluded: ["co"]
                    }, this.dataItems = null
                }
                return Object.defineProperty(e.prototype, "currentChartType", {
                    get: function() {
                        return this._currentChartType
                    },
                    set: function(e) {
                        this._currentChartType = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "chartTypes", {
                    get: function() {
                        return this._chartTypes
                    },
                    set: function(e) {
                        this._chartTypes = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.ngOnInit = function() {
                    var e = this;
                    this.chartObject && (this._currentChartType = this.chartObject.chart.type, setTimeout(function() {
                        e.chart = Highcharts.chart(e.chartObject), e.setChartTitle()
                    }, 20))
                }, e.prototype.ngOnChanges = function() {
                    this.setChartTitle()
                }, e.prototype.setChartTitle = function() {
                    if (this.chart) {
                        var e = this.getTitle();
                        this.chart.setTitle({
                            text: e
                        })
                    }
                }, e.prototype.reDrawChart = function() {
                    var e = this;
                    this.chart && setTimeout(function() {
                        e.chart.reflow()
                    }, 150)
                }, e.prototype.updateChartType = function(e) {
                    this.onChartTypeChange.emit(e)
                }, e.prototype.getTitle = function() {
                    var e = this,
                        t = [],
                        n = "";
                    return this.layoutItems.filters.forEach(function(a) {
                        "ou" === a && e.dataItems.ou && (n = e.dataItems.ou.starting_name, e.dataItems.ou.items.forEach(function(e) {
                            t.push(e.name)
                        })), "pe" === a && e.dataItems.period && e.dataItems.period.items.forEach(function(e) {
                            t.push(e.name)
                        })
                    }), n + " " + t.join(", ")
                }, e
            }();
        o([n.i(a.O)(), r("design:type", Object)], s.prototype, "chartObject", void 0), o([n.i(a.O)(), r("design:type", Object)], s.prototype, "dataItems", void 0), o([n.i(a.O)(), r("design:type", Object)], s.prototype, "layoutItems", void 0), o([n.i(a._2)(), r("design:type", "function" == typeof(l = void 0 !== a.F && a.F) && l || Object)], s.prototype, "onChartTypeChange", void 0), s = o([n.i(a._3)({
            selector: "app-chart-area",
            template: n("PcLq"),
            styles: [n("1LY7")]
        }), r("design:paramtypes", [])], s);
        var l
    },
    uqvZ: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("rCTf"),
            o = (n.n(i), n("Fzro"));
        n.d(t, "a", function() {
            return l
        });
        var r = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            s = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            l = function() {
                function e(e) {
                    this.http = e
                }
                return e.prototype.checkIfLogin = function(e) {
                    var t = this;
                    i.Observable.timer(1, 6e3).subscribe(function() {
                        t.http.post(e + "dhis-web-commons-stream/ping.action", {}).map(function(e) {
                            return e.json()
                        }).catch(function(e) {
                            return i.Observable.throw(new Error(e))
                        }).subscribe(function(t) {
                            t.loggedIn || (window.location.href = e + "dhis-web-commons/security/login.action")
                        }, function() {
                            console.warn("You are offline")
                        })
                    })
                }, e
            }();
        l = r([n.i(a.c)(), s("design:paramtypes", ["function" == typeof(c = void 0 !== o.b && o.b) && c || Object])], l);
        var c
    },
    wWpL: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("98po"),
            o = n("XRdi");
        n.d(t, "a", function() {
            return l
        });
        var r = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            s = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            l = function() {
                function e(e, t) {
                    this.actions$ = e, this.analyticsService = t
                }
                return e
            }();
        l = r([n.i(a.c)(), s("design:paramtypes", ["function" == typeof(c = void 0 !== i.b && i.b) && c || Object, "function" == typeof(d = void 0 !== o.a && o.a) && d || Object])], l);
        var c, d
    },
    x35b: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("3j3K"),
            i = n("O61y"),
            o = n("Iksp"),
            r = n("kZql"),
            s = n("Gvdl"),
            l = (n.n(s), !0);
        s.Observable.prototype.debug = function(e) {
            return this.do(function(t) {
                l && console.log(e, t)
            }, function(t) {
                l && console.error(e, t)
            }, function() {
                l && console.error("Observable completed - ", e)
            })
        }, r.a.production && n.i(a.a)(), n.i(i.a)().bootstrapModule(o.a)
    },
    xEWg: function(e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, ".period,.period:hover{font-size:11px;cursor:pointer}.period:hover{-webkit-transform:scale(1.001);transform:scale(1.001);box-shadow:0 0 10px rgba(0,0,0,.1);background-color:rgba(0,0,0,.03);overflow:auto}.tree-node-active>.node-content-wrapper{background:none!important;color:orange!important}.toggle-children{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);height:8px;width:9px;background-size:contain;display:inline-block;position:relative;background-repeat:no-repeat;background-position:50%}.tree-node-expanded>.toggle-children-wrapper>.toggle-children{-webkit-transform:rotate(0deg)!important;transform:rotate(0deg)!important;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysTqXJGKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADdJREFUeNpjbGhoYMABWIC4vr4eU6KxsZGJATfAJ8cCoRgZGZFF////j5CDcEgwk5B9QOdilQMArx0MGrXJqC8AAAAASUVORK5CYII=)}.tree-node-collapsed>.toggle-children-wrapper>.toggle-children{-webkit-transform:rotate(0deg);transform:rotate(0deg);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC)}.tree-node-active.tree-node-focused>.node-content-wrapper{background:none!important;color:orange!important;font-weight:700}.node-content-wrapper:hover,.tree-node-active>.node-content-wrapper,.tree-node-focused>.node-content-wrapper{box-shadow:none!important}.show_items{position:relative;float:left;display:inline-block;text-align:center;border:1px solid #c6c6c6;padding:4px 2px;font-size:12px;min-height:20px!important;border-radius:4px;color:#555;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;white-space:normal;background-color:#fff;background-image:linear-gradient(#fff,#f7f7f7);width:100%;margin-top:2px;height:26px}.show_items,.show_items small,.show_items span,.show_tops{cursor:pointer}.show_tops{position:relative;float:left;display:inline-block;text-align:center;border:1px solid #c6c6c6;font-size:14px;min-height:38px!important;border-radius:4px;color:#555;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;white-space:normal;background-color:#fff;background-image:linear-gradient(#fff,#f7f7f7);width:7%;height:34px}.arrows:hover{-webkit-transform:scale(1.001);transform:scale(1.001);box-shadow:0 0 10px rgba(0,0,0,.1);background-color:rgba(0,0,0,.05)}.tree-view{z-index:1000;min-width:370px;margin-right:30px;max-height:360px;margin-top:30px}.additional-options,.tree-view{text-align:left;background-color:#fff;position:absolute;border:1px solid rgba(0,0,0,.15);border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175);overflow:auto;padding:10px 5px}.additional-options{z-index:999;min-width:420px;margin-right:13px;max-height:400px;margin-top:38px;right:0}.scorecard_table{margin-bottom:3px;font-size:9px;border:1px solid #ddd;border-spacing:0;border-collapse:collapse;display:table}.pointer label{cursor:pointer}.tree-area{max-height:270px;max-height:210px;overflow:hidden;width:100%;overflow:auto}.tree-area1{max-height:150px;min-height:150px;overflow:hidden;padding-left:3px}.tree-area1:hover{overflow:auto}.hiddenTree{display:none}.tree-area::-webkit-scrollbar{width:5px}.tree-area::-webkit-scrollbar-thumb,.tree-area::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.2);border-radius:10px}.tree-area1::-webkit-scrollbar{width:5px}.tree-area1::-webkit-scrollbar-thumb,.tree-area1::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.2);border-radius:10px}.tree-view::-webkit-scrollbar{width:5px}.tree-view::-webkit-scrollbar-thumb,.tree-view::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.2);border-radius:10px}.tree-view input{border-radius:2px;border:1px solid #ccc;height:26px;font-size:14px;width:100%;padding-left:7px;box-sizing:border-box;color:#888;margin:0 0 8px}span.selected-item{background:inherit;border:1px solid #ececec;border-radius:3px;padding:3px 5px;margin-right:2px;cursor:text;font-size:11px}.selected-item-close{width:20px;cursor:pointer;font-weight:700;display:inline-block;padding:2px;text-align:center;font-size:xx-small}#tree_view .tree-node-active>.node-content-wrapper{background:none!important;color:orange!important}#tree_view .toggle-children{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);height:8px;width:9px;background-size:contain;display:inline-block;position:relative;background-repeat:no-repeat;background-position:50%}#tree_view .tree-node-expanded>.toggle-children-wrapper>.toggle-children{-webkit-transform:rotate(0deg)!important;transform:rotate(0deg)!important;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysTqXJGKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADdJREFUeNpjbGhoYMABWIC4vr4eU6KxsZGJATfAJ8cCoRgZGZFF////j5CDcEgwk5B9QOdilQMArx0MGrXJqC8AAAAASUVORK5CYII=)}#tree_view .tree-node-collapsed>.toggle-children-wrapper>.toggle-children{-webkit-transform:rotate(0deg);transform:rotate(0deg);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC)}#tree_view .tree-node-active.tree-node-focused>.node-content-wrapper{background:none!important;color:orange!important;font-weight:700}#tree_view .tree-node-active>.node-content-wrapper,.node-content-wrapper:hover,.tree-node-focused>.node-content-wrapper{box-shadow:none!important}.close-area{border-top:1px solid #ffebcd;padding-top:5px}@media print{.no-print,.no-print *{display:none}.orgUnitName{min-width:130px;height:35px;max-height:35px;font-size:9px}.legendItem{width:200px;float:left}}.indicator_details{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0;transition:opacity .15s linear;background-color:rgba(0,0,0,.4)}.indicator_dialog{width:86%;margin:100px 7% auto}.indicator-content{box-shadow:0 5px 15px rgba(0,0,0,.5);position:relative;background-color:#fff;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;min-height:200px;padding:10px}.hide_no_group{display:none}table *{line-height:80%}.indicator_title,.subtotal{width:90px;max-width:90px}.indicator_title{font-size:10px;overflow-wrap:break-word;cursor:pointer;line-height:140%}.list-group-item{padding:5px 15px}.removeorgunit{cursor:pointer;border:1px solid rgba(95,158,160,.26);padding-left:2px;padding-right:2px}.dnd-drag-start{-webkit-transform:scale(.8);transform:scale(.8);opacity:.7;border:0 dashed #000}.dnd-drag-enter{opacity:.7}.dnd-drag-enter,.dnd-drag-over{border-top:1px solid #204d74}.dnd-sortable-drag{-webkit-transform:scale(.9);transform:scale(.9);opacity:.7;border-top:0 dashed #000}.fadeOut{color:rgba(0,0,0,.4)}", ""]), e.exports = e.exports.toString()
    },
    yYqM: function(e, t) {
        e.exports = '\x3c!--loader block--\x3e\n\x3c!--<app-loader *ngIf="loading" [loadingMessage]="\'Moving table into position\'"></app-loader>--\x3e\n\x3c!--end of loader block--\x3e\n\n\x3c!--error block--\x3e\n\x3c!--<app-error-notifier *ngIf="hasError" [errorMessage]="errorMessage"></app-error-notifier>--\x3e\n\x3c!--end of error block--\x3e\n<div class="row" *ngIf="!loading && !hasError">\n  <div class="col-md-12" *ngFor="let tableObject of tableObjects">\n    \x3c!--<app-error-notifier *ngIf="tableHasError" [errorMessage]="\'Something is wrong\'"></app-error-notifier>--\x3e\n    <h4 class="text-center item-title">{{tableObject.displayName}}</h4>\n    <h5 style="margin-top: 80px" class="text-center" *ngIf="tableObject.rows.length == 0"> No\n      data to display</h5>\n    <table class="table table-bordered table-responsive table-condensed custom-table"\n           *ngIf="tableObject.rows.length != 0">\n      <thead>\n      <tr *ngFor="let header of tableObject.headers; let j = index">\n        <th *ngFor="let table_column of tableObject.columns; let i = index" style="text-align: center">\n          {{ tableObject.titles.rows[j] }} / {{ tableObject.titles.column[i]}}\n        </th>\n        <th *ngFor="let header_column of header.items" [colSpan]="header_column.span"\n            style="text-align: center">\n          {{ header_column.name }}\n        </th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor="let row of tableObject.rows">\n        <td *ngFor="let header_column of row.items" style="text-align: center;vertical-align: middle"\n            [attr.rowspan]="header_column.row_span">\n          {{ header_column.val }}\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n'
    },
    ycJ1: function(e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, ".pointer{cursor:pointer}.pivot-badge{font-size:10px!important}.badge-de,.btn-info{background-color:#0d7178!important}.badge-ds{background-color:#006400!important}.metadata-list{margin-left:-5px;margin-right:-5px}.metadata-list>li{padding-left:10px!important}.data-header-list{margin-bottom:0;font-size:12px}.metadata-list>li{cursor:pointer;padding:3px;font-size:11px}.metadata-list>li:hover{background-color:#f5f5f5}.tree-area1{max-height:150px;min-height:150px;overflow:hidden}.tree-area1:hover{overflow:auto}.tree-area1::-webkit-scrollbar{width:5px}.tree-area1::-webkit-scrollbar-thumb,.tree-area1::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.2);border-radius:10px}.scrollable{height:380px;overflow:auto}.scrollable:hover{overflow-y:scroll}.scrollable::-webkit-scrollbar{width:5px}.scrollable::-webkit-scrollbar-thumb,.scrollable::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.2);border-radius:10px}.hiddenTree{display:none}.dnd-drag-start{-webkit-transform:scale(.8);transform:scale(1);opacity:.7;border-top:1px solid #204d74}.dnd-drag-enter{opacity:.7}.dnd-drag-enter,.dnd-drag-over{border-top:0 solid #204d74}.dnd-sortable-drag{-webkit-transform:scale(.9);transform:scale(.9);opacity:.7;border-top:2px dashed #000}.fadeOut{color:rgba(0,0,0,.4)}", ""]), e.exports = e.exports.toString()
    },
    yhZV: function(e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, ".loadingAutogrowingMessage,.loadingMessage{position:relative;text-align:center}.update-needed{opacity:.8}.header-column{background-color:#dae6f8}.sub-total{background-color:rgba(218,230,248,.4)}.table-title{background-color:#c7d5e9}.glyphicon{opacity:.7}.header-item{text-align:right}", ""]), e.exports = e.exports.toString()
    },
    zfxj: function(e, t, n) {
        "use strict";
        var a = n("3j3K"),
            i = n("HGLA"),
            o = (n.n(i), n("M4fF")),
            r = (n.n(o), n("TzTL"));
        n.d(t, "a", function() {
            return c
        });
        var s = this && this.__decorate || function(e, t, n, a) {
                    var i, o = arguments.length,
                        r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, a);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
                    return o > 3 && r && Object.defineProperty(t, n, r), r
                },
            l = this && this.__metadata || function(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                },
            c = function() {
                function e(e) {
                    this.excelDownloadService = e, this.showTable = !1, this.showAutoGrowingTable = !1, this.loadingAutogrowing = !1, this.needForUpdate = !1, this.tableObject = null, this.dataItems = null, this.autoGrowingData = null, this.uiState = null, this.loadingParcent = null, this.allDimensionAvailable = !1, this.onTableUpdate = new a.F, this.layoutItems = {
                        rows: ["pe"],
                        columns: ["dx"],
                        filters: ["ou"],
                        excluded: ["co"]
                    }, this.sort_direction = [], this.current_sorting = []
                }
                return e.prototype.ngOnInit = function() {
                    console.log("data-area", this.autoGrowingData)
                }, e.prototype.getTitle = function() {
                    var e = this,
                        t = [],
                        n = "";
                    return this.layoutItems.filters.forEach(function(a) {
                        "ou" == a && e.dataItems.ou && (n = e.dataItems.ou.starting_name, e.dataItems.ou.items.forEach(function(e) {
                            t.push(e.name)
                        })), "pe" == a && e.dataItems.period && e.dataItems.period.items.forEach(function(e) {
                            t.push(e.name)
                        })
                    }), n + " " + t.join(", ")
                }, e.prototype.sortData = function(e, t, n) {
                    if (1 == e.columns.length && n) {
                        this.current_sorting = [], this.current_sorting[t] = !0;
                        var a = void 0,
                            i = void 0,
                            o = void 0,
                            r = void 0,
                            s = void 0,
                            l = void 0,
                            c = void 0,
                            d = void 0,
                            p = 0;
                        for (a = document.getElementById("myPivotTable"), o = !0, d = "asc"; o;) {
                            for (o = !1, i = a.getElementsByTagName("TR"), r = 0; r < i.length - 1; r++)
                                if (c = !1, s = i[r].getElementsByTagName("TD")[t], l = i[r + 1].getElementsByTagName("TD")[t], "asc" == d) {
                                    if (parseFloat(s.innerHTML)) {
                                        if (parseFloat(s.innerHTML) > parseFloat(l.innerHTML)) {
                                            c = !0;
                                            break
                                        }
                                    } else if (s.innerHTML.toLowerCase() > l.innerHTML.toLowerCase()) {
                                        c = !0;
                                        break
                                    }
                                    this.sort_direction[t] = "asc"
                                } else if ("desc" == d) {
                                    if (parseFloat(s.innerHTML)) {
                                        if (parseFloat(s.innerHTML) < parseFloat(l.innerHTML)) {
                                            c = !0;
                                            break
                                        }
                                    } else if (s.innerHTML.toLowerCase() < l.innerHTML.toLowerCase()) {
                                        c = !0;
                                        break
                                    }
                                    this.sort_direction[t] = "desc"
                                }
                            c ? (i[r].parentNode.insertBefore(i[r + 1], i[r]), o = !0, p++) : 0 == p && "asc" == d && (d = "desc", this.sort_direction[t] = "desc", o = !0)
                        }
                    }
                }, e.prototype.updateTable = function() {
                    this.onTableUpdate.emit("")
                }, e.prototype.downloadExcel = function() {
                    this.excelDownloadService.download("My Report", this.autogrowingTable.nativeElement)
                }, e.prototype.downloadExcel1 = function() {
                    var e = this,
                        t = [],
                        n = o.cloneDeep(this.tableObject);
                    console.log(JSON.stringify(n)), this.tableObject.headers.forEach(function(n) {
                        var a = [];
                        e.tableObject.columns.forEach(function(e) {
                            "ou" == e && a.push("Admin Unit"), "dx" == e && a.push("Data"), "pe" == e && a.push("Period")
                        }), n.items.forEach(function(e) {
                            for (var t = 0; t < e.span; t++) a.push(e.name)
                        }), t.push(a)
                    });
                    var a = n.rows[0].items.length;
                    n.rows.forEach(function(e) {
                        for (var t = 0; t < a - e.items.length; t++) e.items.unshift({
                            name: "",
                            value: ""
                        })
                    });
                    var r = [];
                    t.forEach(function(e) {
                        e.forEach(function(e, t) {
                            r[t] ? r[t] += " " + e : r[t] = e
                        })
                    }), r = n.titles.rows.concat(r);
                    var s = [];
                    n.rows.forEach(function(e) {
                        var t = {};
                        r.forEach(function(n, a) {
                            t[n] = e.items[a].val ? e.items[a].val : ""
                        }), s.push(t)
                    });
                    var l = {
                        fieldSeparator: ",",
                        quoteStrings: '"',
                        decimalseparator: ".",
                        showLabels: !0,
                        showTitle: !1
                    };
                    return new i.Angular2Csv(s, "My Report", l), {
                        headers: r,
                        data: s
                    }
                }, e.prototype.getClasses = function(e) {
                    var t = [];
                    return "" != e.name && t.push("header-column"), isNaN(e.val) || t.push("header-item"), t
                }, e
            }();
        s([n.i(a.O)(), l("design:type", Boolean)], c.prototype, "showTable", void 0), s([n.i(a.O)(), l("design:type", Boolean)], c.prototype, "showAutoGrowingTable", void 0), s([n.i(a.O)(), l("design:type", Boolean)], c.prototype, "loadingAutogrowing", void 0), s([n.i(a.O)(), l("design:type", Boolean)], c.prototype, "needForUpdate", void 0), s([n.i(a.O)(), l("design:type", Object)], c.prototype, "tableObject", void 0), s([n.i(a.O)(), l("design:type", Object)], c.prototype, "dataItems", void 0), s([n.i(a.O)(), l("design:type", Object)], c.prototype, "autoGrowingData", void 0), s([n.i(a.O)(), l("design:type", Object)], c.prototype, "uiState", void 0), s([n.i(a.O)(), l("design:type", Object)], c.prototype, "loadingParcent", void 0), s([n.i(a.O)(), l("design:type", Boolean)], c.prototype, "allDimensionAvailable", void 0), s([n.i(a._2)(), l("design:type", "function" == typeof(d = void 0 !== a.F && a.F) && d || Object)], c.prototype, "onTableUpdate", void 0), s([n.i(a.O)(), l("design:type", Object)], c.prototype, "layoutItems", void 0), s([n.i(a._7)("autogrowingTable"), l("design:type", "function" == typeof(p = void 0 !== a.M && a.M) && p || Object)], c.prototype, "autogrowingTable", void 0), c = s([n.i(a._3)({
            selector: "data-area",
            template: n("0S4q"),
            styles: [n("yhZV")]
        }), l("design:paramtypes", ["function" == typeof(u = void 0 !== r.a && r.a) && u || Object])], c);
        var d, p, u
    }
}, [0]);