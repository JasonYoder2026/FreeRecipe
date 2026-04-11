import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  @Input() activeTab: string = 'home';

  topNavItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'explore', label: 'Explore', icon: 'compass' },
    { id: 'messages', label: 'Messages', icon: 'message' },
    { id: 'post', label: 'Post', icon: 'plus' }
  ];

  bottomNavItems = [
    { id: 'feedback', label: 'Feedback', icon: 'chat' },
    { id: 'settings', label: 'Settings', icon: 'settings' }
  ];

  onNavClick(itemId: string): void {
    this.activeTab = itemId;
    // Emit event or navigate as needed
    console.log('Navigating to:', itemId);
  }
}
