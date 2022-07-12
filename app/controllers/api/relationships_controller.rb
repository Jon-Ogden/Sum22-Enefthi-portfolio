class Api::RelationshipsController < ApplicationController
    def all_relationships
        render json: Relationship.all
    end
end
