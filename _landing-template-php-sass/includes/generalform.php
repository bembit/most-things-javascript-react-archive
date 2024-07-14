<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<form class="">
    <div class="form-group">
        <label for="name">Full name</label>
        <input type="name" class="form-control" id="name" placeholder="Your name" required>
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="mail@example.com" required>
    </div>
    <div class="form-group">
        <label for="phone">Phone</label>
        <input type="phone" class="form-control" id="phone" placeholder="1-555-SHOE" required>
    </div>
    <div class="form-group">
        <label for="requests">Content</label>
        <textarea id="requests" rows="3" class="form-control" placeholder="Required"></textarea>
    </div>
    <div class="g-recaptcha" data-sitekey="6LfA8r0UAAAAAONx3fKbnO0SuiAOa6WDD5J8v7lZ"></div>
    <button class="btn btn-primary text-white">Send message</button>
</form>