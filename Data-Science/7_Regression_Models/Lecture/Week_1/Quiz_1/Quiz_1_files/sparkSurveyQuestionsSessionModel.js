define(["bundles/assess/assessmentTypes/quickQuestions/sessionModel","underscore","js/lib/q"],function(QuickQuestionsSessionModel,_,Q){var SparkSurveyQuestionsSessionModel=QuickQuestionsSessionModel.extend({callSessionAction:function(name,argument){return Q(this.options.api.post("classQuick/class/"+this.get("classId")+"/sessions/"+this.get("sessionId")+"/action/"+name,{data:{argument:argument}})).then(function(data){return data["return"]})},callGetOrCreateSession:function(argument){return Q(this.options.api.post("classQuick/class/"+this.get("classId")+"/sessions",{data:{argument:argument}})).then(function(data){return data.session.id})}});return SparkSurveyQuestionsSessionModel});