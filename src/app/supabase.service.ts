import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Database } from 'src/schema';

export interface Profile {
    id?: string;
    username: string;
    website: string;
    avatar_url: string;
}

@Injectable({
    providedIn: 'root',
})
export class SupabaseService {
    private supabase: SupabaseClient<Database>;
    

    constructor() {
        this.supabase = createClient<Database>(environment.supabaseUrl, environment.supabaseKey);
    }

    async getComments() {
        const response = await this.supabase.from('comments').select('*');
        return response;
    }

    async addComment(comment: string, characterId: number){
        const response = await this.supabase.from('comments').insert({comment, characterId});
        return response;
    }

}
