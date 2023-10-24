import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Database } from 'src/schema';

@Injectable({
    providedIn: 'root',
})
export class SupabaseService {
    private supabase: SupabaseClient<Database>;

    constructor() {
        this.supabase = createClient<Database>(environment.supabaseUrl, environment.supabaseKey);
    }

    async getComments(): Promise<any[] | null> {
        const response = await this.supabase.from('comments').select('*');
        return response.data;
    }

    async addComment(comment: string, characterId: number){
        const response = await this.supabase.from('comments').insert({content:comment, character_id: characterId});
        return response;
    }

}
