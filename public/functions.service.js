(function() {
    'use strict';

    angular.module('app')
        .service('functions', functions)


    function functions($http) {

        this.returnRandomView = function(currentView) {
            let view = null;
            do {
                const index = this.returnRandomIndex();
                view = this.translateIndexToView(index);
            } while (currentView === view)

            return view;

        }

        this.returnRandomIndex = function() {
            const max = 4;
            const min = 1;
            const index = Math.floor(Math.random() * ((max - min) + min));

            return index;
        }

        this.translateIndexToView = function(index) {
            let view = null;
            switch (index) {
                case 0:
                    view = "name";
                    break;

                case 1:
                    view = "city";
                    break;

                case 2:
                    view = "email";
                    break;

                default:
                    view = "name";
                    break;
            }

            return view;

        }

        this.getPostByID = function(id) {
            return $http.get(`/api/posts/${id}`)
                .then((post) => {
                    return post.data;
                })
        }

        this.updatePostInDB = function(dbPost) {
            return $http.patch(`/api/posts/${dbPost.id}`, dbPost)

        }

        this.getPostsFromDB = function() {
            return $http.get('/api/posts')
                .then((dbPostObject) => {
                    return dbPostObject.data;
                })
        }

        this.postToDB = function(postData) {
            return $http.post('/api/posts', postData)
                .then((result) => {
                    return result;
                })
        }

        this.postNewComment = function(post, commentObject) {
            return $http.post(`/api/posts/${post.id}/comments`, commentObject)
                .then((result) => {
                    return result;
                })
        }

        this.postUpVote = function(id) {
            return $http.post(`/api/posts/${id}/votes`, {
                    id
                })
                .then((result) => {
                    return result;
                })
        }

        this.deleteUpVote = function(id) {
            return $http.delete(`/api/posts/${id}/votes`)
                .then((result) => {
                    return result;
                })
        }
    }

}());
