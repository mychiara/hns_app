'use strict'; module.exports = angular.module('Hns.templates',['template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html','template/controllers/settings/create.html','template/controllers/settings/show.html']);
angular.module("template/controllers/settings/create.html",[]).run(["$templateCache",function(e){e.put("template/controllers/settings/create.html",'<h3>Create Settings</h3><div class="settings-creation"><div class="settings-creation--grid"><h4 class="settings-creation--title">Grid settings</h4><div class="form-group"><label for="grid.height">Grid height</label> <input class="form-control" type="number" min="2" max="12" id="grid.height" name="grid.height" ng-model="createSettings.grid.height"></div><div class="form-group"><label for="grid.width">Grid width</label> <input class="form-control" type="number" min="2" max="12" id="grid.width" name="grid.width" ng-model="createSettings.grid.width"></div></div><div class="settings-creation--teamred"><h4 class="settings-creation--title">Team Red settings</h4><div class="form-group"><label for="teamred.sightLength">Sight</label> <input class="form-control" type="number" id="teamred.sightLength" name="teamred.sightLength" ng-model="createSettings.teamRed.sightLength"></div><div class="form-group"><label for="teamred.count">Count</label> <input class="form-control" type="number" id="teamred.count" name="teamred.count" ng-model="createSettings.teamRed.count"></div><div class="form-group"><label for="teamred.speed">Speed</label> <input class="form-control" type="number" id="teamred.speed" name="teamred.speed" ng-model="createSettings.teamRed.speed"></div></div></div><div class="settings-creation--teamblue"><h4 class="settings-creation--title">Team Blue settings</h4><div class="form-group"><label for="teamred.sightLength">Sight</label> <input class="form-control" type="number" id="teamblue.sightLength" name="teamblue.sightLength" ng-model="createSettings.teamBlue.sightLength"></div><div class="form-group"><label for="teamblue.count">Count</label> <input class="form-control" type="number" id="teamblue.count" name="teamblue.count" ng-model="createSettings.teamBlue.count"></div><div class="form-group"><label for="teamblue.speed">Speed</label> <input class="form-control" type="number" id="teamblue.speed" name="teamblue.speed" ng-model="createSettings.teamBlue.speed"></div></div>')}]),angular.module("template/controllers/settings/show.html",[]).run(["$templateCache",function(e){e.put("template/controllers/settings/show.html",'<h3>Settings</h3><!--found some settings show them--><div class="settings-list" ng-show="settings.settings.length"><div class="settings-list--item" ng-repeat="setting in settings.settings">{{ setting }}</div></div><div class="nothing-found alert alert-info"><h3>Nothing found</h3><p>Sorry, but there are now settings to show.</p><hr><a ui-sref="settings-create" class="btn btn-primary">Create Settings</a></div>')}]);