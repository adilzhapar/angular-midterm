import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  comments: any[] | null = [];

  constructor(private readonly supabase: SupabaseService){}

  async ngOnInit(): Promise<void> {
    this.comments = await this.supabase.getComments();
    console.log(this.comments);
  }
  
  async handleAdd(f: NgForm){
    await this.supabase.addComment(f.value.comment, f.value.character_id);
  }
}
