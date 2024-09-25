using System;
using System.Windows.Forms;
using static System.Runtime.InteropServices.JavaScript.JSType;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace new_form
{

    public partial class Form2 : Form 
    {
        public Form2(int result, int count, string operName)
        {
            InitializeComponent();
            
            label1.Text = $"Результат: {result}";
            label2.Text = $"Количество операций: {count}";
            Text = operName;
        }

        

        public int result;
        public int count;

        public void form2(int result, int count)
        {
            InitializeComponent();
            label1.Text = $"Результат: {result}";
            label2.Text = $"Количество операций: {count}";
        }


        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private string data;
        public string Data2
        {

            get { return data; }
            set { data = value; label1.Text = value; }
        }
    }
}
