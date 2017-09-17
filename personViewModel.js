function personViewModel() {
	let self = this;
	self.id = ko.observable();
	self.personName = ko.observable();
	self.personNumber = ko.observable();
	
	self.perName = ko.observable();
	self.perNumber = ko.observable();
	
	self.editUserData = "";
	self.personArray = ko.observableArray([]);
	
	//INIT personArray
	self.loadData = function(){
		for(let i = 0; i < 400; i++) {
			 self.personArray.push({id: ko.observable(i), name:ko.observable("name00"+i), number:ko.observable(i) });	
		}
	}
	self.loadData();
	//END INIT personArray
	
	//CRUD
	self.addPerson = function(user){	
		let lastId = self.personArray()[self.personArray().length-1].id();
		self.personArray.push({id: ko.observable(lastId+1),name:ko.observable(user.perName()), number:ko.observable(user.perNumber()) });
		modalStyleDisplay(modal);
		resetAllValues('myModal');
	};
	self.removePerson = function() {
        self.personArray.remove(this);
    };
	self.editPerson = function(user) {
		console.log(user)
		self.personName(user.name());
		self.personNumber(user.number());
		btnEdit.onclick();
		self.editUserData = user;
    };
	self.saveEditPerson = function(saveEditUser) {
		for (let i = 0; i < self.personArray().length; i++) {
			if(self.personArray()[i].name == self.editUserData.name && self.personArray()[i].number == self.editUserData.number) {
				let newObj = new Object();
				self.personArray()[i].id(self.editUserData.id());
				self.personArray()[i].name(saveEditUser.personName());
				self.personArray()[i].number(saveEditUser.personNumber());
		
				break;
			}
		}
		self.editUserData = "";
		modalStyleDisplay(modalEdit);
		resetAllValues('myModalEdit');
    };
	self.detailsPerson = function(user) {
		self.personName(user.name());
		self.personNumber(user.number());
		btnDetails.onclick();
    };
	self.closeDetailsPerson = function() {
		spanDetails.onclick();
    };
	//END CRUD
	
	//PAGNIG
	self.nbPagination = 3;
	self.nbPaginationOnSite = ko.observableArray([]);
    self.pageNumber = ko.observable(0);
    self.nbPerPage = 10;
	self.totalPages = ko.computed(function() {
		let div = Math.floor(self.personArray().length / self.nbPerPage);
		div += self.personArray().length % self.nbPerPage > 0 ? 1 : 0;
		return div - 1;
	});
	self.paginated = ko.computed(function() {
        let first = self.pageNumber() * self.nbPerPage;
        return self.personArray.slice(first, first + self.nbPerPage);
    });
	self.hasPrevious = ko.computed(function() {
		return self.pageNumber() !== 0;
	});
	self.hasNext = ko.computed(function() {
		return self.pageNumber() !== self.totalPages();
	});
	self.next = function() {
		if(self.pageNumber() < self.totalPages()) {
			self.pageNumber(self.pageNumber() + 1);
		}
	};
	self.previous = function() {
		if(self.pageNumber() != 0) {
			self.pageNumber(self.pageNumber() - 1);
		}
	};
	self.PageCount = ko.computed(function () {
        return Math.ceil(self.totalPages() / self.nbPerPage);
    });
	self.firstPage =  function(){
		 self.pageNumber(0);
	};
	self.lastPage =  function(){
		self.pageNumber(self.totalPages());
	};
	self.displayFewNumbers = ko.computed(function() {
     	self.nbPaginationOnSite([]);	
		
		for(let i = 0; i < self.nbPagination; i++) {				
			let temp = new Object();
			temp.numberr = parseInt(self.pageNumber()) + parseInt(i);
			self.nbPaginationOnSite.push(temp);
		}
	});
	self.currentPage = function(nb){
		if(nb.numberr > self.pageNumber()) {
			self.next();
		} 
		else{
			self.previous();
		}
	};	
	//END PAGING
};
ko.applyBindings(new personViewModel());
