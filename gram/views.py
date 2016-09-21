from gram import app
from flask import render_template


@app.route('/')
def index():
    context = {
        'links': {
            'css': [
                'css/fix_roll.css',
                'css/capsule.css',
                'css/circular_img_icon.css',
                'css/foot_buttons.css',
                'css/list.css',
                'css/msg.css',
                'css/msg_complete.css',
                'css/responsive_input_bar+.css',
                'css/marble.css',
                'css/afeld_emoji.css',
                'lib/jquery-ui-1.12.1.custom/jquery-ui.css',
            ],
            'js': {
                'head': [
                    'lib/jquery-3.1.0.js',
                    'lib/jquery-ui-1.12.1.custom/jquery-ui.js',
                    'lib/ractive/0.7.3.js',
                ],
                'body': [
                    'js/+resize+drag+btns.js',
                ],
            }
        }
    }
    return render_template('layout.html', **context)