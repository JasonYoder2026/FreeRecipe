import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  @Input() userName: string = 'User';
  @Input() userAvatar: string | null = null;
  @Input() notificationCount: number = 3;

  searchQuery: string = '';

  get userInitial(): string {
    return this.userName.charAt(0).toUpperCase();
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      // Implement search logic here
    }
  }

  clearSearch(): void {
    this.searchQuery = '';
  }

  onNotificationClick(): void {
    console.log('Notifications clicked');
    // Implement notification logic here
  }

  onProfileClick(): void {
    console.log('Profile clicked');
    // Implement profile menu logic here
  }
}
