var _=require('lodash');

module.exports=function(val){


	if (!_.isUndefined(val)){

		//is not zero
		if(_.isNumber(parseFloat(val)) && parseFloat(val)!==0){
			return true;
		}

		//if string yes
		if(_.isString(val) && _.indexOf(['yes','yeah','true','ok'],val.toLowerCase())>-1){
			return true;
		}

		//if boolean
		if(_.isBoolean(val) && val===true){
			return true;
		}

		//if not empty
		if((_.isObject(val) || _.isArray(val)) && !_.isEmpty(val)){
			return true;
		}

	}

	return false;
}